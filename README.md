# iRacing-PS-Scripts [Based on https://github.com/golmakov/grexport]
A series of scripts to help automate the process of painting cars in iRacing

# Installation
There are two scripts provided. Typically yoou would only want to use one of the scripts, however clever use of keybind shortcuts you could probably use both (I haven't tried!)

*iRSaveTGA-ASK* will open a folder explorer to ask where you want to save it. -Recommended for Cloud Documents

*irSaveTGA-Auto* will save wherever your PSD file is saved. -Recommended for local files

To use this script, put the file wherever you would like to save your Photoshop Scripts. Then, either use the script through Scripts -> Browse or add it to the Script Events Manager to activate on Save Document

![image](https://github.com/lithiumfox/iRacing-PS-Scripts/assets/4545555/14ecbed0-9377-4ee1-a282-2b861e4e6977)


# Use
This is to help automate the process of saving TGA files when saving your PSD file. Personally the main goal is to have this activate anytime you save, so it'll automatically update all the files. 

Much like the script it's based on, I retained it's previous features:

If layer group name starts with a "^" sign, that layer would be exported with the downlaying group layer without this sign. (It is usefull for things like pop-ups)

If group needs to be shared between all exported pages, place "#" sign in it name and make that group visible before export.

You can exclude group from export by setting group colour to red.

You can force a file to save as a 32-bit w/ Alpha Channel by setting it's group color to VIOLET. (decal layers do this by default)

Export Selected Groups exports only groups which have been colored in yellow.

The visible layer which hadn't been put into any of the groups is exported to all files.

--------
# iRacing Specific Use
![image](https://github.com/lithiumfox/iRacing-PS-Scripts/assets/4545555/b5da614f-da84-405d-99f9-065e561c1c45)

Configure your groups as such. Just rename the "Custom Spec Map" group to "car_spec_id#" and "Paintable Area" to "car_id#". The formats and everything else is taken care of automatically based on these names. The following group names would be valid for iRacing.  Replace ##### with your iRacing ID number:

- suit_#####
- helmet_#####
- car_#####
- car_num_#####
- car_spec_#####
- car_team_#####
- car_num_team_#####
- car_spec_team_#####
- car_decal_##### (Will Save as 32-Bit) [[You will still need to create an alpha channel layer for this to function correctly!](https://support.iracing.com/support/solutions/articles/31000133480-how-do-i-custom-paint-my-iracing-cars-#:~:text=add%20a%2032%2Dbit%20TGA%20file%20with%20an%20alpha%20channel)]

[I do not automatically lowercase these. I will look into that]

*Setting the Group to Red will exclude it from the script!*

![image](https://github.com/lithiumfox/iRacing-PS-Scripts/assets/4545555/65baa6f7-2dd4-471f-bcb3-18a3083c1f34)


Use the Script Manager to automatically save TGA files whenever you save!
![image](https://github.com/lithiumfox/iRacing-PS-Scripts/assets/4545555/4cb78477-a692-400c-a362-f6468c6b1305)

* Please note that this happens EVERYTIME you save. Even when you're closing Photoshop... lol. Preferably a custom keybind would be better for this.


# Changes I've made:

- Stores your group visibility settings [Original script would disable all groups AFTER processing.]
- Hide all groups automatically before running and current target group after it's processed. [Original Script made you do this manually for it to save the TGA correctly PRIOR to running. For some reason.]
- Restores state of your groups after running.
- If decal or spec layer groups are named, they will be saved as 32-bit TGA
- Otherwise saves at 24-bit tga

# Future Plans
- Find out if there's a way to automate alpha layer for car_decal_x.tga
- Figure out how the decal layer actually works.
- Add script to automate process of spec mapping. Eg: Use specific groups to automatically configure "sponsor" layers to allow for moving sponsors on the base layer to automatically be adjusted on the spec layer.
- Determine if there's bugs with what I have already.
- Make a proper plugin with GUI
