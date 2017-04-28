/**
 * Objects Declaration
 */

var bio = {
	"name": "Bassel Ahmed",
	"role": "Front-end Web Developer",
	"contacts": {
		"mobile": "+201062030263",
		"email": "bassel.ahmed@outlook.com",
		"github": "basselAhmed",
		"twitter": "@MrBasselAhmed",
		"location": "Egypt"
	},
	"welcomeMessage": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
	"skills": [
		"Awesomeness",
		"Making Things",
		"Get you smiling ;)"
	],
	"bioPic": "images/me.png"
};

var education = {
	"schools": [{
			"name": "bla",
			"location": "Egypt",
			"degree": "Bla International",
			"dates": 2016,
			"url": "google.com",
			"majors": [
				"Yo",
				"Yaa",
				"Yeeee"
			]
		},
		{
			"name": "bla bla",
			"location": "Egypt",
			"degree": "Bla Global",
			"dates": 2015,
			"url": "facebook.com",
			"majors": [
				"Yo",
				"Yaa",
				"Yeeee"
			]
		}
	],
	"onlineCourses": [{
			"title": "FEND Nanodegree",
			"school": "Udacity",
			"dates": 2017,
			"url": "udacity.com"
		},
		{
			"title": "VR Nanodegree",
			"school": "Udacity",
			"dates": 2017,
			"url": "udacity.com"
		}
	]
};

var work = {
	"jobs": [{
			"employer": "Self employed",
			"title": "Web Dev",
			"location": "Egypt",
			"dates": "12/04/2016 - Future",
			"description": "Neque porro quisquam est qui dolorem ipsum"
		},
		{
			"employer": "Second Job",
			"title": "Pentester",
			"location": "Egypty",
			"dates": "12/04/2014 - 12/04/2015",
			"description": "Neque porro quisquam est qui dolorem ipsum"
		}
	]
};

var projects = {
	"projects": [{
			"title": "bla",
			"dates": "12/04/2017",
			"description": "Neque porro quisquam",
			"images": [
				"images/ph.gif",
				"images/ph.gif"
			]
		},
		{
			"title": "bla bla",
			"dates": "12/04/2017",
			"description": "Neque porro quisquam Neque porro quisquam",
			"images": [
				"images/ph.gif",
				"images/ph.gif"
			]
		}
	]
};


/**
 * Display Functions
 */

bio.display = function () {

	var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role ? bio.role : "Role");
	$("#header").prepend(formattedHTMLheaderRole);
	var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name ? bio.name : "Full Name");
	$("#header").prepend(formattedHTMLheaderName);

	var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile ? bio.contacts.mobile : "+201077007700");
	$("#topContacts").append(formattedHTMLmobile);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email ? bio.contacts.email : "generic@mail.com");
	$("#topContacts").append(formattedHTMLemail);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github ? bio.contacts.github : "github");
	$("#topContacts").append(formattedHTMLgithub);
	var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter ? bio.contacts.twitter : "@twitter");
	$("#topContacts").append(formattedHTMLtwitter);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location ? bio.contacts.location : "Location");
	$("#topContacts").append(formattedHTMLlocation);

	$("#footerContacts").append(formattedHTMLmobile);
	$("#footerContacts").append(formattedHTMLemail);
	$("#footerContacts").append(formattedHTMLgithub);
	$("#footerContacts").append(formattedHTMLtwitter);
	$("#footerContacts").append(formattedHTMLlocation);

	$("#header").append("<div class='img vcenter'></div>");
	var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic ? bio.bioPic : "http://placehold.it/300x300");
	$(".img.vcenter").append(formattedHTMLbioPic);

	$("#header").append("<div class='text vcenter'></div>");
	var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage ? bio.welcomeMessage : "Welcome Message");
	$(".text.vcenter").append(formattedHTMLwelcomeMsg);

	if (bio.skills && bio.skills.length > 0) {
		$(".text.vcenter").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedHTMLskills);
		}
	}

};


education.display = function () {

	if (education.schools && education.schools.length > 0) {
		education.schools.forEach(function (school) {
			$("#education").append(HTMLschoolStart);
			var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name ? school.name : "School Name");
			$(".education-entry:last").append(formattedHTMLschoolName);
			var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree ? school.degree : "School Degree");
			$(".education-entry:last a:last").append(formattedHTMLschoolDegree);
			var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates ? school.dates : "School Dates");
			$(".education-entry:last").append(formattedHTMLschoolDates);
			var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location ? school.location : "School Location");
			$(".education-entry:last").append(formattedHTMLschoolLocation);

			if (school.majors && school.majors.length > 0) {
				var allMajors = "";
				for (var i = 0; i < school.majors.length; i++) {
					if (i !== school.majors.length - 1) {
						allMajors += school.majors[i] + ", ";
					} else {
						allMajors += school.majors[i];
					}
				}
				var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", allMajors);
				$(".education-entry:last").append(formattedHTMLschoolMajor);
			}
		});
	}

	if (education.onlineCourses && education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function (onlineCourse) {
			$("#education").append("<div class='online-courses'></div>");
			var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title ? onlineCourse.title : "Online Course Title");
			$(".online-courses:last").append(formattedHTMLonlineTitle);
			var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school ? onlineCourse.school : "Online Course School");
			$(".online-courses a:last").append(formattedHTMLonlineSchool);
			var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates ? onlineCourse.dates : "Online Course dates");
			$(".online-courses:last").append(formattedHTMLonlineDates);
			var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url ? onlineCourse.url : "Online Course URL");
			$(".online-courses:last").append(formattedHTMLonlineURL);
		});
	}

};


work.display = function () {

	if (work.jobs && work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		work.jobs.forEach(function (job) {
			var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer ? job.employer : "Job Employer");
			$(".work-entry:last").append(formattedHTMLworkEmployer);
			var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title ? job.title : "Job Title");
			$(".work-entry:last a:last").append(formattedHTMLworkTitle);
			var formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates ? job.dates : "Job Dates");
			$(".work-entry:last").append(formattedHTMLworkDates);
			var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location ? job.location : "Job Location");
			$(".work-entry:last").append(formattedHTMLworkLocation);
			var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description ? job.description : "Job Description");
			$(".work-entry:last").append(formattedHTMLworkDescription);
		});
	}

};


projects.display = function () {

	if (projects.projects && projects.projects.length > 0) {
		$("#projects").append(HTMLprojectStart);
		projects.projects.forEach(function (project) {
			var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title ? project.title : "Project Title");
			$(".project-entry:last").append(formattedHTMLprojectTitle);
			var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates ? project.dates : "Project Dates");
			$(".project-entry:last").append(formattedHTMLprojectDates);
			var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description ? project.description : "Project Description");
			$(".project-entry:last").append(formattedHTMLprojectDescription);

			if (project.images && project.images.length > 0) {
				for (var i = 0; i < project.images.length; i++) {
					var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", project.images[i]);
					$(".project-entry:last").append(formattedHTMLprojectImage);
				}
			}

		});
	}

};



/**
 * Function calls
 */

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);

$("#main").append(internationalizeButton);

function inName(name) {
	if (name && name.indexOf(' ') > -1) {
		var arr = name.split(' ');
		return arr[0][0].toUpperCase() + arr[0].slice(1) + " " + arr[1].toUpperCase();
	}
}