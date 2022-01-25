let audio = new Audio(),
	current_voicepack = {pack: "", voice: ""},
	vgs_cmd_list = Object.keys(voicepacks.all),
	available_combos = vgs_cmd_list,
	current_cmd = [],
	available_next = ["V"],
	ELEM_voicepacks_dropdown = document.getElementById("voicepacks_dropdown"),
	ELEM_pack_indicator = document.getElementById("current_pack_indicator");

const DOMBLOCKS = {
	dropdown_option: function(value, text){
		return '<option value="' + value + '">' + text + '</option>';
	},
	dropdown_optgroup: function(value, text, content){
		return '<optgroup value="' + value + '" label="' + text + '">' + content + '</optgroup>';
	},
	output_toast: function(cmd){
		return '<div class="output_toast">[' + cmd + '] ' + voicepacks.all[cmd].split("%").join("") + '</div>';
	},
	vgs_li: function(cmd, key){
		return '<li onclick="parseKey({key:\'' + key + '\'})">' + key + ': ' + parseKeyword(voicepacks.all[cmd + key]) + '</li>';
	},
	vgs_li_folder: function(cmd, key){
		return '<li style="font-weight:400;" onclick="parseKey({key:\'' + key + '\'})">' + key + ': ' + voicepacks.folders[cmd + key] + '</li>';
	},
	vgs_li_root: function(){
		return '<li style="font-weight:400;" onclick="parseKey({key:\'V\'})">V: Voice Commands</li>';
	}
}

//Populate the dropdown menu
Object.keys(voicepacks.packs).forEach((pack_key) => {
	let voice_pack_options = '';
	Object.keys(voicepacks.packs[pack_key].voices).forEach((voice_key) => {
		voice_pack_options += DOMBLOCKS.dropdown_option(voice_key.toString(), voicepacks.packs[pack_key].voices[voice_key].name);
		if(voicepacks.packs[pack_key].voices[voice_key].default){
			current_voicepack.pack = voicepacks.packs[pack_key].name.toString();
			ELEM_pack_indicator.innerHTML = current_voicepack.pack + ":";
			current_voicepack.voice = voice_key.toString();
		}
	});
	ELEM_voicepacks_dropdown.innerHTML += DOMBLOCKS.dropdown_optgroup(pack_key.toString(), voicepacks.packs[pack_key].name, voice_pack_options);
});
updateMenu();
ELEM_voicepacks_dropdown.value = current_voicepack.voice;
document.addEventListener("keydown", parseKey);


function parseKey(k){
	if(k.key.toString().toUpperCase() != "ESCAPE" && available_next.includes(k.key.toString().toUpperCase())){
		current_cmd.push(k.key.toString().toUpperCase());
		available_next = [];
		available_combos = available_combos.filter((v) => {return v.substr(0, current_cmd.join("").length) == current_cmd.join("")});
		for(let i = 0; i < available_combos.length; i++){
			let char = available_combos[i].substr(current_cmd.length, 1);
			char == "" ? false : available_next.includes(char) ? false : available_next.push(char);
		}
		available_next.length == 0 ? playVGS(0) : false;
		updateMenu();
		ELEM_voicepacks_dropdown.value = current_voicepack.voice;
	}else{
		playVGS(1);
	}
}


function parseKeyword(phrase){
	return phrase.split("%")[1][0].toUpperCase() + phrase.split("%")[1].substr(1, phrase.length);
}


function updateMenu(){
	document.querySelector("#classic_vgs_card p").innerHTML = current_cmd.join("");
	document.querySelector("#classic_vgs_card ul").innerHTML = "";
	let items = '';
	let folders = '';

	if(current_cmd.length > 0){
		for(let i = 0; i < available_next.length; i++){
			let key = current_cmd.join("") + available_next[i];
			if(vgs_cmd_list.includes(key)){
				items += DOMBLOCKS.vgs_li(current_cmd.join(""), available_next[i]);
			}else{
				folders += DOMBLOCKS.vgs_li_folder(current_cmd.join(""), available_next[i]);
			}
		}
	}else{
		items = DOMBLOCKS.vgs_li_root();
	}

	document.querySelector("#classic_vgs_card ul").innerHTML = folders + items;
}


function packSelectionChanged(e){
	Object.keys(voicepacks.packs).forEach((pack_key) => {
		Object.keys(voicepacks.packs[pack_key].voices).forEach((voice_key) => {
			if(voice_key === e.target.value){
				current_voicepack.pack = voicepacks.packs[pack_key].name.toString();
			}
		});
	});
	current_voicepack.voice = e.target.value;
	ELEM_pack_indicator.innerHTML = current_voicepack.pack + ":";
}


function playVGS(flag){
	if(flag === 0){
		document.querySelectorAll(".output_toast").forEach((e) => {e.remove()});
		document.querySelector("main").innerHTML += DOMBLOCKS.output_toast(current_cmd.join(""));
		let elem = document.querySelector(".output_toast");
		elem.addEventListener("animationend", () => {elem.remove()});
		document.querySelector(".loading").style.opacity = 1;
		audio.pause();
		audio = new Audio( (current_voicepack.voice.includes("$") ? "community_packs/" + current_voicepack.voice.split("$")[1].split("_").join(" ") : "voicepacks/" + current_voicepack.voice.split("_").join(" ")) + "/" + file_name_map[current_cmd.join("")] + ".ogg");
		audio.addEventListener('loadeddata', () => {
			if(audio.readyState >= 2){
				audio.play();
				document.querySelector(".loading").style.opacity = 0;

				current_cmd = [];
				available_combos = vgs_cmd_list;
				available_next = ["V"];
				updateMenu();
				ELEM_voicepacks_dropdown.value = current_voicepack.voice;
			}
		});
	}else{
		current_cmd = [];
		available_combos = vgs_cmd_list;
		available_next = ["V"];
		updateMenu();
		ELEM_voicepacks_dropdown.value = current_voicepack.voice;
	}
}
