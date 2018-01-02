package com.ex.getItApp.service;

import com.ex.getItApp.model.StudySession;

public interface StudySessionService {
	
	public void addStudySession(StudySession session);
	public StudySession findStudySessionById(Integer id);
	public StudySession findStudySessionByAuthorId(Integer id);
}
