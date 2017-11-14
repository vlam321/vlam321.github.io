function valOf(id) {return document.getElementById(id);}

function submitForm() {
	valOf("subbutton").disable = true;
	var name = valOf("name").value;
	var subject = valOf("subject").value;
	var msg = valOf("msg").value;
	var body = "";
	var uri = "mailto:lamvc@uci.edu"	
	body += msg + "\r\n\r\n";
	body += "Name: " + name + "\r\n";
	uri += "?subject=" + encodeURIComponent(subject);
	uri += "&body=" + encodeURIComponent(body);
	window.open(uri, "_blank");
}
