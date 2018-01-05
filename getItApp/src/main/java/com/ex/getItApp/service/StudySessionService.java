package com.ex.getItApp.service;

import java.util.List;

import com.ex.getItApp.model.StudySession;
import com.ex.getItApp.model.User;

public interface StudySessionService {
	
	public void addStudySession(StudySession session);
	public StudySession findStudySessionById(Integer id);
	public List<StudySession> findStudySessionByauthor(User id);
	public List<StudySession> findStudySessionByuser(User id);
}
