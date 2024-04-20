// Automatically outputs to where the document is saved
var outputFolder = app.activeDocument.path;

if (outputFolder != null) {

    var activeLayer = activeDocument.activeLayer;

    // List all top level groups in file
    var allGroups = app.activeDocument.layerSets;
    var len = allGroups.length;
    const groupVisible = [];

    // Stores state of Group before setting all groups invisible
    for (var i = len - 1; i >= 0; i--) {
        groupVisible[i] = allGroups[i].visible;
        allGroups[i].visible = 0;
    }

    // Iterate groups from bottom to top
    for (var i = len - 1; i >= 0; i--) {
        var groupName = allGroups[i].name;

        // Show Group
        allGroups[i].visible = 1;

        // If name start with # skip this layer
        if (groupName[0] == "#") {
            continue;
        }

        // Check if it isn't a pop-up
        if (groupName[0] != "^") {
            var master = allGroups[i];
        } else {
            master.visible = 1;

            // Remove ^ simbol from filename
            var re = /(?!\^\s*).+/;
            groupName = groupName.match(re);
        }

        // Ignore red colored groups
        app.activeDocument.activeLayer = allGroups[i];
        if (getLayerColour() != "red") {
            targaFile = File(outputFolder + "/" + groupName + ".tga");
            SaveTGA(targaFile);
        }

        // Makes groups invisible again just in case of transparent layers like decal layers are being processed
        allGroups[i].visible = 0;
        master.visible = 0;

        // Reverts Back to Starting State
        for (var i = len - 1; i >= 0; i--) {
            allGroups[i].visible = groupVisible[i];
        }

        // Restore active layer
        activeDocument.activeLayer = activeLayer;
    }
}

// Save as TGA
function SaveTGA(targaFile) {
    var targaSaveOptions = new TargaSaveOptions();
    if (getLayerColour() == "violet" || groupName.match(/^.*decal.*$/)) {
        targaSaveOptions.resolution = TargaBitsPerPixels.THIRTYTWO;
        targaSaveOptions.alphaChannels = true;
    } else {
        targaSaveOptions.resolution = TargaBitsPerPixels.TWENTYFOUR;
        targaSaveOptions.alphaChannels = false;
    }
    targaSaveOptions.rleCompression = true;
    app.activeDocument.saveAs(targaFile, targaSaveOptions, true);
}

// Return active layer color (found somewere in the internets)
function getLayerColour() {
    // Colours returned ....
    // "none","red","orange","yellowColor","grain","blue","violet","gray"
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var appDesc = executeActionGet(ref);
    return typeIDToStringID(appDesc.getEnumerationValue(stringIDToTypeID('color')));
}
