package com.ex.getItApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.getItApp.model.StudySession;
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
	public StudySession findStudySessionByAuthorId(Integer id) {
		return studysessionRepo.findStudySessionByauthorid(id);
	}

}
