package com.ex.getItApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.getItApp.model.StudySet;


@Repository
public interface StudySetRepository extends JpaRepository<StudySet, Integer> {

	public StudySet findStudySetById(Integer Id);
	public StudySet findStudySetByauthorid(Integer Id);
	
}
