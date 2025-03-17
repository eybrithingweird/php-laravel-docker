import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image, Line, Svg } from '@react-pdf/renderer';
import logo from '../../seal.png';
import { DataTable } from '../components/DataTable';
import { MysulatProvider } from '../contexts/MysulatContext';
import TableMysulat from '../components/Mysulat/TableMysulat';
import { SelectedLetterProvider } from '../contexts/SelectedLetterContext';

// 'resizable=yes,width=950,height=625,top=20,scrollbars=yes,left=10'

export default function Mysulat() {
	return (
		<>
			<MysulatProvider>
				<section className="content-header pt-24">
					<h1>My Letter Requests</h1>
				</section>

				{/* <img src={ logo } /> */}

				<section className="content">
					{/* <PDFViewer style={styles.viewer}>
						{pdfFile}
					</PDFViewer> */}

					<div className="box box-default">
						<div className="box-header with-border">
							{/* <h3 className="box-title">My Letter Requests</h3> */}
							{/* <span className="pull-right">
								<button name="backBtn" className="btn btn-default">
									<i className="fa fa-arrow-left"></i> Back
								</button>
							</span> */}
						</div>
						
						<SelectedLetterProvider>
							<div className="box-body">
								<div className="row">
									{/* <div className="col-lg-9">
										
									</div>
									<div className="col-lg-3">
										
									</div> */}
									<TableMysulat />
								</div>
							</div>
						</SelectedLetterProvider>
					</div>
				</section>
			</MysulatProvider>
		</>
	);
}