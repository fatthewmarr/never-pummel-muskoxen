package com.ex.getItApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.getItApp.model.AccessLevel;

@Repository
public interface AccessLevelRepository extends JpaRepository<AccessLevel, Integer> {

	public AccessLevel findAccessLevelByuserid(Integer id);
	public AccessLevel findAccessLevelById(Integer id);
}
