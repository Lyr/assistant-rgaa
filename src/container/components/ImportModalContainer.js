import {connect} from 'react-redux';
import {isModalOpen, getErrors, isValid} from '../../common/selectors/imports';
import {closeModal, setErrors, setContent, reset, apply} from '../../common/actions/imports';
import ImportModal from './ImportModal';
import {validateJson} from '../../common/api/imports';



/**
 *
 */
const mapStateToProps = (state) => ({
	open: isModalOpen(state),
	valid: isValid(state),
	errors: getErrors(state)
});

/**
 *
 */
const mapDispatchToProps = (dispatch) => ({
	onClose() {
		dispatch(reset());
		dispatch(closeModal());
	},

	onFileSelection(content) {
		try {
			const data = JSON.parse(content);
			if (validateJson(data)) {
				dispatch(setContent(data));
			}
		} catch (e) {
			dispatch(setErrors(e.message));
		}
	},

	onSubmit(valid) {
		if (valid) {
			dispatch(apply());
			dispatch(closeModal());
		}
	}
});



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ImportModal);
