import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ImageMenuItem.module.css'; // Import CSS module for styling

const ImageMenuItem = ({ imageUrl, label, text }) => {
  return (
    <div className={styles.imageMenuItem}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={label} className={styles.roundedImage} />
      </div>
      <div className={styles.content}>
        <div className={styles.label}>{label}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

ImageMenuItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageMenuItem;
