import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeleteAccountConfirmationModal from "./DeleteAccountConfirmationModal";
import React from "react";
import "./DeleteAccountForm.css";

function DeleteAccountForm() {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div className="delteAccountContainer">
			<Modal.Dialog>
				<h3>Delete your account </h3>

				<p id="goodbyeMessage">we are sorry to see you go.</p>

				<hr id="deleteAccountHr" />
				<p id="deleteMessage">
					{" "}
					Once your account is deleted, all of your content will be permanently
					gone, including your profile, offers and collaborations.{" "}
				</p>
				<Modal.Footer>
					<Button
						className="deleteAccountButton"
						onClick={() => setModalShow(true)}
					>
						Delete Account
					</Button>
				</Modal.Footer>
			</Modal.Dialog>
			<DeleteAccountConfirmationModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
}

export default DeleteAccountForm;
