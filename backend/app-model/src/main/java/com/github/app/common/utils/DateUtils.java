package com.github.app.common.utils;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

public class DateUtils {

	private DateUtils(){}
	
	public static Date convertToDate(LocalDateTime dateTime) {
    	ZonedDateTime zdt = dateTime.atZone(ZoneId.systemDefault());
    	return Date.from(zdt.toInstant());
	}
}
