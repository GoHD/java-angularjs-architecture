package com.github.app.testcommons.utils;

import org.junit.Ignore;

@Ignore
public interface DBCommand<T> {

	T execute();

}