# iRacing-PS-Scripts [Based on https://github.com/golmakov/grexport]
A series of scripts to help automate the process of painting cars in iRacing

# Installation
Place one or both of these wherever you want your Photoshop Scripts to be. Either open the script thorugh the script menu or use the Script Manager to add this to an event or keybind.

# Use
This is to help automate the process of saving TGA files when saving your PSD file. Personally the main goal is to have this activate anytime you save, so it'll automatically update all the files. 

Much like the script it's based on, I retained it's previous features:

If layer group name starts with a "^" sign, that layer would be exported with the downlaying group layer without this sign. (It is usefull for things like pop-ups)

If group needs to be shared between all exported pages, place "#" sign in it name and make that group visible before export.

You can exclude group from export by setting group colour to red.

Export Selected Groups exports only groups which have been colored in yellow.

The visible layer which hadn't been put into any of the groups is exported to all files.

# Changes I've made:

- Stores your group visibility settings
- Hide all groups automatically before running and current target group after it's processed.
- Restores state of your groups after running.
- If decal or spec layer groups are named, they will be saved as 32-bit TGA
- Otherwise saves at 24-bit tga

# Future Plans
- Find out if there's a way to automate alpha layer for car_decal_x.tga
- Figure out how the decal layer actually works.
- Add script to automate process of spec mapping. Eg: Use specific groups to automatically configure "sponsor" layers to allow for moving sponsors on the base layer to automatically be adjusted on the spec layer.
- Determine if there's bugs with what I have already.
