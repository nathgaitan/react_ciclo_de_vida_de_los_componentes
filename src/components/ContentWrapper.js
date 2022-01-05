import React from 'react';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';
import TopBar from './TopBar';


const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">


			<div id="content">

	
				<TopBar />
	
                <ContentRowTop />
	
				
	            <Table />
			</div>
           
          <Footer />

		</div>

    );
}

export default ContentWrapper;
