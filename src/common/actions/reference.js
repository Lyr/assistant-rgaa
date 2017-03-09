/**
 *
 */
export const FETCH_THEME = 'common/reference/FETCH';
export const SET_REFERENCE = 'common/reference/SET_REFERENCE';
export const SET_REFERENCE_VERSION = 'common/reference/SET_REFERENCE_VERSION';
export const SET_THEMES = 'common/reference/SET_THEMES';
export const SET_CRITERIA = 'common/reference/SET_CRITERIA';
export const SET_TESTS = 'common/reference/SET_TESTS';



/**
 *
 */
export const setReferenceVersion = (version) => ({
	type: SET_REFERENCE_VERSION,
	payload: {
		version
	}
});

/**
 *
 */
export const setReference = (data) => ({
	type: SET_REFERENCE,
	payload: {
		data
	}
});

/**
 *
 */
export const setThemes = (themes) => ({
	type: SET_THEMES,
	payload: themes
});

/**
 *
 */
export const setCriteria = (criteria) => ({
	type: SET_CRITERIA,
	payload: criteria
});

/**
 *
 */
export const setTests = (tests) => ({
	type: SET_TESTS,
	payload: tests
});
