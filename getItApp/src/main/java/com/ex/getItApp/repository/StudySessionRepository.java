package com.ex.getItApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.getItApp.model.StudySession;
import com.ex.getItApp.model.User;


@Repository
public interface StudySessionRepository extends JpaRepository<StudySession, Integer>{
	

	public StudySession findStudySessionById(Integer id);
	public List<StudySession> findStudySessionByauthor(User id);
	public List<StudySession> findAllByuser(User id);


}
