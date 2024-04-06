import React, { useEffect } from 'react';

const Spinner = () => {
    useEffect(() => {
        const spinner = setTimeout(() => {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);

        return () => clearTimeout(spinner);
    }, []); // useEffect sẽ chỉ chạy một lần sau khi component được render

    return (
        <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div>
    );
}

export default Spinner;
