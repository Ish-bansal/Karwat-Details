import React from 'react';
import MainUpsell from '../../../compnonents/screens/Detail/MainUpsell';
import UpsellData from '../../../compnonents/screens/Detail/UpsellData'
const Upsell=()=>{
    return(
	<>
			{
				UpsellData.map((val)=>{
					return(
						<MainUpsell
							link={val.link}
							sale={val.sale}
							tag={val.tag}
						/>
					);
				})
			}

        </>
    )
}
export default Upsell;