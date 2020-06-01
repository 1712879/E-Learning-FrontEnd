import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/detail.css';
const ProductDetail = ({ title }) => {
    let { coursename } = useParams();
    return (
        <div className="course--detail body--container">
            {/* <p className="div">Detail page <mark>{title}</mark></p>
            <p className="div">coursename:  <mark>{coursename}</mark></p> */}
            <div className="row bg-primary course--title">
                <h3 style={{margin: '250px'}}>Thông tin tổng quan về khóa học <mark>{coursename}</mark></h3>
            </div>
            <div className="row  course--body">
                <div className="col-8 course--content bg-danger">
                    <div className="row h-50 course--content bg-secondary">
                        <h3>What you'll learn</h3>
                    </div>
                    <div className="row h-50 course--content bg-info">
                        <h3>Requirements</h3>
                    </div>
                    <div className="row h-50 course--content bg-dark">
                        <h3>Description</h3>
                    </div>
                    <div className="row h-50 course--content bg-secondary">
                        <h3>Course content</h3>
                    </div>
                    <div className="row h-50 course--content bg-info">
                        <h3>Student feedback</h3>
                    </div>
                    <div className="row h-50 course--content bg-dark">
                        <h3>Frequently Bought Together</h3>
                    </div>
                </div>

                <div className="col-4 course--info bg-success">
                    <h3>thông tin học phí, hình thức thanh toán ...</h3>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail;