import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./DeleteAccountForm.css";
import React from "react";

function DeleteAccountConfirmationModal(props) {
	return (
		<Modal
			className="deleteConfirmationModal"
			show={props.show}
			onHide={props.onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Deleting Account
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Are you sure?</h4>
				<p>
					If you delete your account all your data will be erased permanently.
				</p>
			</Modal.Body>
			<Modal.Footer className="modalFooter">
				<Button className="deleteAccountButton" onClick={props.onHide}>
					Delete Account
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default DeleteAccountConfirmationModal;
