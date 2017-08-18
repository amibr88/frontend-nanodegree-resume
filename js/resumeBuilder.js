// by Amira Almurayshid//


///////////first object/////////

 var bio ={
	 name:"Amira Almurayshid",
	 role:"Front-end Developer",
	 contacts:{
		  mobile: "0552477625",
          email: "amibr88@gmail.com", 
          github: "amibr88",
          twitter: "iaialm", 
          location: "Riyadh",
	 },
	welcomeMessage: "Welcome to my online Resume  ",
	 skills: [" SQL "," PL/SQL "," HTML "," CSS "," JS "," Tableau"],
	 biopic: "/Users/amira/Desktop/frontend-nanodegree-resume-master/images/fry",
	 display: function(){
		"use strict";
		 var newname = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(newname);
		 
		 var newrole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(newrole);
		 	 
		 var newmobile = HTMLmobile.replace("%data%",bio.mobile);
$("#header").append(newmobile);
		 
		 var newemail = HTMLemail.replace("%data%",bio.email);
$("#header").append(newemail);
		 
		 var newtwitter = HTMLtwitter.replace("%data%",bio.twitter);
$("#header").append(newtwitter);
		 
		 var newgithub = HTMLgithub.replace("%data%",bio.github);
$("#header").append(newgithub);
		
		 var newlocation = HTMLlocation.replace("%data%",bio.location);
$("#body").append(newlocation);
		 
		 var newMSG = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(newMSG);
		 
		 var skillsstart= HTMLskillsStart.replace("%data%",bio.skills);
$("#header").append(skillsstart);
		 	 var newskills= HTMLskills.replace("%data%",bio.skills);
$("#header").append(newskills);
		 
			var newbiopic= HTMLbioPic.replace("%data%",bio.biopiciopic);
$("#header").prepend(newbiopic);
	 }
 };

bio.display();



 
///////////second object//////////

var education ={
	schools:[
	
	{
		name: "MONASH university",
    	location: "Melbourne,Australia",
    	degree: "Bachelor",
    	majors: ["information technology and systems"],
    	dates: "2014/2017",	
		}
],
		
	onlineCourses:[
		
		{
			
		title: "graphic Design",
        school: "show academy",
        dates: "2016",
        url: "http://www.shawacademy.com/"
		
		}
	],
	
	display: function(){
		"use strict";
	var schoolstart = HTMLschoolStart.replace("%data%",education.schools.name);
$("#education").append(schoolstart);
		
	var schoolname = HTMLschoolName.replace("%data%",education.schools.name);
$("#education").append(schoolname);
		
		var newdscegree = HTMLschoolDegree.replace("%data%",education.schools.degree);
$("#education").append(newdscegree);
		
		var newdate = HTMLschoolDates.replace("%data%",education.schools.dates);
$("#education").append(newdate);
		
	var newlscocation = HTMLschoolLocation.replace("%data%",education.schools.location);
$("#education").append(newlscocation);
		
		var newscmajor = HTMLschoolMajor.replace("%data%",education.schools.major);
$("#education").append(newscmajor);	
			
			var onlinest = HTMLonlineClasses.replace("%data%",education.onlineCourses);
$("#education").append(onlinest);
		
		var newtitle = HTMLonlineTitle.replace("%data%",education.onlineCourses.title);
$("#education").append(newtitle);
		
	var newonlineschool = HTMLonlineSchool.replace("%data%",education.onlineCourses.school);
$("#education").append(newonlineschool);
		
		var newonlinedate = HTMLonlineDates.replace("%data%",education.onlineCourses.dates);
$("#education").append(newonlinedate);	
		
	}
};

education.display();



//////////third object////////

var work ={
	jobs:[
		{
		
		employer: "string", 
        title: "string", 
        location: "string",
        dates: "2011/2012",
        description: "string",
				display: function(){
	"use strict";		
	var newemployer = HTMLworkEmployer.replace("%data%",work.employer);
$("#work").append(newemployer);
			var worktitle = HTMLworkTitle.replace("%data%",work.title);
$("#work").append(worktitle);
			var worklocation = HTMLworkDates.replace("%data%",work.location);
$("#work").append(worklocation);
			var workdate =  HTMLworkLocation.replace("%data%",work.dated);
$("#work").append(workdate);
			var workDescription = HTMLworkDescription.replace("%data%",work.description);
$("#work").append(workDescription);
		}
}
		]
};
      
work.display();     



///////////forth object/////////


 var projects=
{

  [
	  {

		title: "string",
        dates: "2016/2017",
        description: "string",
        images:["",""] 
   
	   } 
  ],
	
display:function(){
	

"use strict";
		 var projecttitle = HTMLprojectTitle.replace("%data%",projects.title);
$("#projects").append(projecttitle); 
		 
		  var projectdates = HTMLprojectDates.replace("%data%",projects.dates);
$("#projects").append(projectdates); 
		 
var projectdescription = HTMLprojectDescription.replace("%data%",projects.description);
$("#projects").append(projectdescription); 
		 
		  //var projectimg = HTMLprojectImage.replace("%data%",projects.images);
//$("#projects").append(projectimg); 

};
        
projects.display();
    

 
 
 
 
       
    





