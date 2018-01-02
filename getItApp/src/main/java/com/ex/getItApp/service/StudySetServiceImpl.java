package com.ex.getItApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.getItApp.model.StudySet;
import com.ex.getItApp.model.User;
import com.ex.getItApp.repository.StudySetRepository;

@Service
@Transactional
public class StudySetServiceImpl implements StudySetService{

	@Autowired
	private StudySetRepository studysetRepo;

	@Override
	public void addStudySet(StudySet studyset) {
		studysetRepo.save(studyset);
	}

	@Override
	public StudySet findStudySetById(Integer Id) {
		return studysetRepo.findStudySetById(Id);
		
	}

	@Override
	public List<StudySet> findStudySetsByAuthor(User author) {
		return studysetRepo.findStudySetsByauthor(author);
	}

	public List<StudySet> findAllStudySets() {
		return studysetRepo.findAll();
	}

	@Override
	public StudySet findStudySetByName(String name) {
		return studysetRepo.findStudySetByname(name);
	}

}
