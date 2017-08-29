// by Amira Almurayshid//
///////////first object/////////
var bio = {
  name: "Amira Almurayshid",
  role: "Front-end Developer",
  contacts: {
    mobile: "0552477625",
    email: "amibr88@gmail.com",
    github: "amibr88",
    twitter: "iaialm",
    location: "Riyadh",
  },
  biopic: "images/lisa.jpg",
  welcomeMessage: "Welcome to my online Resume  ",
  skills: [" SQL ", " PL/SQL ", " HTML ", " CSS ", " JS ", " Tableau"],
  
 
  display: function() {
    "use strict";
    var newname = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(newname);

    var newrole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(newrole);

    var newmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(newmobile);

    var newemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(newemail);

    var newtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(newtwitter);

    var newgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(newgithub);

    var newlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(newlocation);

    var newMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(newMSG);

   var newbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(newbiopic);

   
    $("#header").append(HTMLskillsStart);
	  
for(var s=0;s<bio.skills.length;s++){
	
	 var newskills = HTMLskills.replace("%data%", bio.skills[s]);
    $("#skills").append(newskills);
}
  
var newmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(newmobile);

    var newemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(newemail);

    var newtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(newtwitter);

    var newgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(newgithub);

    var newlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(newlocation);

  }
};

bio.display();




///////////second object//////////

var education = {
  schools: [

    {
      name: "MONASH university",
      location: "Melbourne,Australia",
      degree: "Bachelor",
      majors: ["Information Technology & Systems"],
      dates: "2014-2017",
    },
    {
      name: "TVTC",
      location: "Riyadh,Saudi Arabia",
      degree: "Diploma",
      majors: ["Technical Support"],
      dates: "2009-2011",
    }
  ],

  onlineCourses: [

    {

      title: "Graphic Design",
      school: "Show Academy",
      dates: "2016",
      url: "http://www.shawacademy.com/"
    },

    {

      title: "Front-End devlopment",
      school: "Udacity",
      dates: "2017",
      url: "https://www.udacity.com/"
    },

    {

      title: "HR management online",
      school: "Drob & SEU",
      dates: "2017",
      url: "https://www.doroob.sa/ar//"
    },
    {

      title: "Leadership skills and supervision management ",
      school: "Drob & SEU",
      dates: "2017",
      url: "https://www.doroob.sa/ar//"
    },
    {

      title: "E-Commerce ",
      school: "Drob & SEU",
      dates: "2017",
      url: "https://www.doroob.sa/ar//"
    }

  ],

  display: function() {
    //"use strict";

    for (var i = 0; i < education.schools.length; i++) {

      //
      $("#education").append(HTMLschoolStart);

      var schoolname = HTMLschoolName.replace("%data%", education.schools[i].name);
      $(".education-entry:last").append(schoolname);

      var newdscegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      $(".education-entry:last").append(newdscegree);


      var newdate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $(".education-entry:last").append(newdate);

      var newlscocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      $(".education-entry:last").append(newlscocation);

      var newmajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $(".education-entry:last").append(newmajor);
    }

//online

    $("#education").append(HTMLonlineClasses);

    for (var e = 0; e < education.onlineCourses.length; e++) {
      $("#education").append(HTMLschoolStart);

      var newtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[e].title);

      $(".education-entry:last").append(newtitle);

      var newonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[e].school);
      $(".education-entry:last").append(newonlineschool);

      var newonlinedate = HTMLonlineDates.replace("%data%", education.onlineCourses[e].dates);
      $(".education-entry:last").append(newonlinedate);

      var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[e].url);
      $(".education-entry:last").append(onlineUrl);

    }
  }
};

education.display();

console.log(googleMap);
$("#mapDiv").append(googleMap);

//////////third object////////

var work = {
  jobs: [{

    employer: "Saudi schezophreena cocity",
    title: "IT technician",
    location: "Riyadh",
    dates: "2011/2012",
    description: "I was working on IT field . to fix Devices and manage the social media accounts"
  },
		 {
			 
		employer: "Imam Muhammad bin saud uneversity",
    title: "IT technician",
    location: "Riyadh",
    dates: "2011",
    description: "I was working on IT team to fix devices"	 
			 
			 
			 
		 }
		
		],
	
  display: function() {
	$("#workExperience").append(HTMLworkStart);
    "use strict";
    for (var m = 0; m < work.jobs.length; m++) {
      $("#workExperience").append(HTMLworkStart);
      var newemployer = HTMLworkEmployer.replace("%data%", work.jobs[m].employer);
      $(".work-entry:last").append(newemployer);
      var worktitle = HTMLworkTitle.replace("%data%", work.jobs[m].title);
      $(".work-entry:last").append(worktitle);
      var worklocation = HTMLworkDates.replace("%data%", work.jobs[m].location);
      $(".work-entry:last").append(worklocation);
      var workdate = HTMLworkLocation.replace("%data%", work.jobs[m].dates);
      $(".work-entry:last").append(workdate);
      var workDescription = HTMLworkDescription.replace("%data%", work.jobs[m].description);
      $(".work-entry:last").append(workDescription);

    }
  }
};

work.display();

///////////object 4 /////////


var projects = {
  projects: [{
    title: "Website",
    dates: "2016/2017",
    description: "I worked with a group of 4 to bould a website for Unified fright management. the website aims to illustrates unifid fright services in australia and to make it easy for the new costomers to contact the owner David by using contact form , as well as making it ewwasy for david to manage inquiries in the admin dashboard.the all website was developed by Cackephp",
    images:["images/uni1.jpg","images/k1.png"]
	 
  },
{
    title: "Data Visualisation",
    dates: "2016",
    description: "It was an information visualisation about Gender, Institutions and Education Development Among Countries, the study was counducted in 2009 .. I illustrates the Data by using Public Tableau to make it easier for anyone to understand, compare,and discover all the numbers about the listed countries and areas",
    images:["images/l1.png"]
	 
  }],

  display: function() {
    "use strict";

    for (var j = 0; j < projects.projects.length; j++) {
      $("#projects").append(HTMLprojectStart);

      $("#project-entry:last").append(HTMLprojectStart);

      var projecttitle = HTMLprojectTitle.replace("%data%", projects.projects[j].title);
      $(".project-entry:last").append(projecttitle);

      var projectdates = HTMLprojectDates.replace("%data%", projects.projects[j].dates);
      $("project-entry:last").append(projectdates);

      var projectdescription = HTMLprojectDescription.replace("%data%", projects.projects[j].description);
      $(".project-entry:last").append(projectdescription);
      for (var k = 0; k < projects.projects[j].images.length; k++) {
       var newimages = HTMLprojectImage.replace("%data%", projects.projects[j].images[k]);
        $(".project-entry:last").append(newimages);
   }
 }
  }
};

projects.display();