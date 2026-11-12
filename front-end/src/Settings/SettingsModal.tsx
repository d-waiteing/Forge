import { Modal } from "react-bootstrap";

type SettingsModalProps = {
  onHide: () => void;
}

function SettingsModal({ onHide }: SettingsModalProps) {
  return (
    <Modal className="forge-modal" show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Here are your settings.</p>
      </Modal.Body>
    </Modal>
  );
}

export default SettingsModal;