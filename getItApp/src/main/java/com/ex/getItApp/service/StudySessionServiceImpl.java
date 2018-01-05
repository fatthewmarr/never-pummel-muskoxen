package com.ex.getItApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.getItApp.model.StudySession;
import com.ex.getItApp.model.User;
import com.ex.getItApp.repository.StudySessionRepository;

@Service
@Transactional
public class StudySessionServiceImpl implements StudySessionService{

	@Autowired
	private StudySessionRepository studysessionRepo;
	
	@Override
	public void addStudySession(StudySession session) {
		studysessionRepo.save(session);
		
	}

	@Override
	public StudySession findStudySessionById(Integer id) {
		return studysessionRepo.findStudySessionById(id);
	}

	@Override
	public List <StudySession> findStudySessionByauthor(User id) {
		return studysessionRepo.findStudySessionByauthor(id);
	}

	public List <StudySession> findStudySessionByuser(User id){
		return studysessionRepo.findAllByuser(id);
	}


}
