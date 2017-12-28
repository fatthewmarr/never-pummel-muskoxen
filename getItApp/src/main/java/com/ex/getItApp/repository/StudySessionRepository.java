package com.ex.getItApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.getItApp.model.StudySession;


@Repository
public interface StudySessionRepository extends JpaRepository<StudySession, Integer>{
	
	public StudySession findStudySessionById(Integer id);
	public StudySession findStudySessionByauthorid(Integer id);

}
