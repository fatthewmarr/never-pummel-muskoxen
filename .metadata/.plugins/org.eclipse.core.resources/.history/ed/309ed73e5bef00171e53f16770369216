package com.ex.getItApp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.getItApp.model.StudySet;
import com.ex.getItApp.model.User;
import com.ex.getItApp.service.StudySetService;
import com.ex.getItApp.service.UserService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("getit/sets")
public class StudySetController {

	@Autowired
	StudySetService service;
	
	@Autowired
	UserService us;
	
	static {
		System.out.println("In the StudySet Controller");
	}
	
	@RequestMapping(value="/addset", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public void addStudySet(@RequestBody StudySet set) {
		service.addStudySet(set);
	}
	
	@RequestMapping(value="/author/{id}", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<StudySet> getAuthorSets(@PathVariable int id) {
		System.out.println("Id is: " + id);
		Integer temp = id;
		User author = us.findUserById(temp);
		System.out.println(author);
		return service.findStudySetsByAuthor(author);
	}
	
	@RequestMapping(method = RequestMethod.POST,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<StudySet> getAll(){
		return service.findAllStudySets();
	}
	
	@RequestMapping(value="/name/{name}", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public StudySet getSetByName(@PathVariable String name) {
		System.out.println("Name is: " + name);
		return service.findStudySetByName(name);
	}
}
