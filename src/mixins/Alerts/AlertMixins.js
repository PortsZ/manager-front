import Swal from 'sweetalert2';

export default {
	successAlert(alertTitle){
		return Swal.fire({
			icon: 'success',
			title: alertTitle,
			showConfirmButton: false,
			timer: 1200
		});
	},
	errorAlert(){
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
		});
	}
};