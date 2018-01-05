package com.ex.getItApp.controllers;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



import com.ex.getItApp.model.StudySession;
import com.ex.getItApp.model.User;
import com.ex.getItApp.service.StudySessionService;
import com.ex.getItApp.service.UserService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("getit/studysessions")
public class StudySessionController {
	
	@Autowired
	StudySessionService service;
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value="/addstudysess", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public void addStudySession(@RequestBody StudySession session) {
		
		List<User> attendee = session.getUser();
		List<User> attendeesnew = new ArrayList<User>();
		System.out.println("List of users id: " + attendee);
		for(User per: attendee)
		{
			System.out.println("User being added to list of attendants:" + userService.findUserById(per.getId()));
			attendeesnew.add(userService.findUserById(per.getId()));
		}
		session.setUser(attendeesnew);
		System.out.println("New list of users: " + attendeesnew);
		service.addStudySession(session);
	}
	
	@RequestMapping(value="/getstudysess", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public StudySession findStudySessionById(@RequestBody int id) {
		Integer sessid= id;
		return service.findStudySessionById(sessid);
	}
	
	@RequestMapping(value="/getuserstudysess/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List <StudySession> findStudySessionByauthor(@PathVariable int id){
		Integer iD= id;
		User author = userService.findUserById(iD);
		List <StudySession> sessions = service.findStudySessionByauthor(author);
		for(StudySession per : sessions) {
			per.getUser();
		}
		return service.findStudySessionByauthor(author);
	}
	
	@RequestMapping(value="/rsvpstudysess/{sessid}/{userid}", method=RequestMethod.GET, produces="application/json")
	public void addUserToStudySession(@PathVariable int sessid, @PathVariable int userid) {
		List<User> attendees = new ArrayList<User>();
		attendees = service.findStudySessionById(sessid).getUser();
		StudySession event = service.findStudySessionById(sessid);
		System.out.println("List of attendees before add is: " + attendees);
		System.out.println("User about to be added to list is: " + userService.findUserById(userid));
		attendees.add(userService.findUserById(userid));
		System.out.println("List of attendees after add is: " + attendees);
		event.setUser(attendees);
		service.addStudySession(event);
	}
	
	@RequestMapping(value="/getmystudysess", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<StudySession> findStudySessionByAttendee(@RequestBody User id) {
		User client = userService.findUserById(id.getId());
		return service.findStudySessionByuser(client);
	}

}
