var mapButtons = document.getElementsByClassName("mapButton");

var mapTab = document.getElementById("map");

var activeMap = mapButtons[0];
//activeMap.setclass active

for(var i=0;i<mapButtons.length;i++){
	mapButtons[i].addEventListener("click", function(){
		switch(this.id){
			case "mB1":
				mapTab.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d595.3624127203178!2d-6.391224978835565!3d53.3531072551378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x202a1ad711704bf4!2sFOOD%20COURT%20LIFFEY%20VALLEY%20SHOPPING%20CTR!5e0!3m2!1sen!2sie!4v1618756582100!5m2!1sen!2sie';
				break;
			case "mB2":
				mapTab.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39405.041512604126!2d-8.488829404903637!3d51.88258770270088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484484d60fb3516d%3A0xbd38dcca7e224ec4!2sMahon%20Point%20Shopping%20Centre!5e0!3m2!1sen!2sie!4v1618761558198!5m2!1sen!2sie';
				break;
			case "mB3":
				mapTab.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38737.404042226524!2d-8.6808808!3d52.6403276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b5c665b8d96fb%3A0xa6817db0d059ea33!2sCrescent%20Shopping%20Centre!5e0!3m2!1sen!2sie!4v1618763243160!5m2!1sen!2sie';
				break;
			case "mB4":
				mapTab.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4771.401985308961!2d-9.05294307170556!3d53.276976919858264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b977a6a782127%3A0x1b33fc7c1b22186d!2sGalway%20Shopping%20Centre!5e0!3m2!1sen!2sie!4v1618763810802!5m2!1sen!2sie';
				break;
			case "mB5":
				mapTab.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2291.378230256952!2d-7.7397726841396866!3d54.948925980346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485f94cd24b506b5%3A0xd7a775d31187282c!2sThe%20Courtyard%20Shopping%20Centre%20Letterkenny!5e0!3m2!1sen!2sie!4v1618764073746!5m2!1sen!2sie';
				break;
			case "mB6":
				mapTab.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.315843817686!2d-6.149491184223372!3d52.79864387986804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867c3fe5b0ebda5%3A0x4e5b0dc80d05f666!2sBridgewater%20Shopping%20Centre!5e0!3m2!1sen!2sie!4v1618764487389!5m2!1sen!2sie';
				break;
			case "mB7":
				mapTab.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.6680517743587!2d-5.926400741278066!3d54.59807140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48610855b8db7029%3A0xd290c871632bad50!2sVictoria%20Square!5e0!3m2!1sen!2sie!4v1618764883189!5m2!1sen!2sie';
				break;
			default:
				mapTab.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d595.3624127203178!2d-6.391224978835565!3d53.3531072551378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x202a1ad711704bf4!2sFOOD%20COURT%20LIFFEY%20VALLEY%20SHOPPING%20CTR!5e0!3m2!1sen!2sie!4v1618756582100!5m2!1sen!2sie';
		}
	});
}

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.6680517743587!2d-5.926400741278066!3d54.59807140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48610855b8db7029%3A0xd290c871632bad50!2sVictoria%20Square!5e0!3m2!1sen!2sie!4v1618764883189!5m2!1sen!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.315843817686!2d-6.149491184223372!3d52.79864387986804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867c3fe5b0ebda5%3A0x4e5b0dc80d05f666!2sBridgewater%20Shopping%20Centre!5e0!3m2!1sen!2sie!4v1618764487389!5m2!1sen!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2291.378230256952!2d-7.7397726841396866!3d54.948925980346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485f94cd24b506b5%3A0xd7a775d31187282c!2sThe%20Courtyard%20Shopping%20Centre%20Letterkenny!5e0!3m2!1sen!2sie!4v1618764073746!5m2!1sen!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4771.401985308961!2d-9.05294307170556!3d53.276976919858264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b977a6a782127%3A0x1b33fc7c1b22186d!2sGalway%20Shopping%20Centre!5e0!3m2!1sen!2sie!4v1618763810802!5m2!1sen!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
//<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38737.404042226524!2d-8.6808808!3d52.6403276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b5c665b8d96fb%3A0xa6817db0d059ea33!2sCrescent%20Shopping%20Centre!5e0!3m2!1sen!2sie!4v1618763243160!5m2!1sen!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38720.4425429479!2d-8.653526547245002!3d52.65947798913809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b5c67cbf894cf%3A0x7811d45e2f122659!2sArthur&#39;s%20Quay%20Shopping%20Centre!5e0!3m2!1sen!2sie!4v1618762691181!5m2!1sen!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39405.041512604126!2d-8.488829404903637!3d51.88258770270088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484484d60fb3516d%3A0xbd38dcca7e224ec4!2sMahon%20Point%20Shopping%20Centre!5e0!3m2!1sen!2sie!4v1618761558198!5m2!1sen!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>