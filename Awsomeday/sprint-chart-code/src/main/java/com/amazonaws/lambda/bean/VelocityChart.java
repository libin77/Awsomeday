package com.amazonaws.lambda.bean;

public class VelocityChart {
	private String sprintName;
	private int acceptedPoints;
	private int completedPoints;

	public String getSprintName() {
		return sprintName;
	}
	public void setSprintName(String sprintName) {
		this.sprintName = sprintName;
	}
	public int getAcceptedPoints() {
		return acceptedPoints;
	}
	public void setAcceptedPoints(int acceptedPoints) {
		this.acceptedPoints = acceptedPoints;
	}
	public int getCompletedPoints() {
		return completedPoints;
	}
	public void setCompletedPoints(int completedPoints) {
		this.completedPoints = completedPoints;
	}
}
