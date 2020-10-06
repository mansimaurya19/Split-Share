import React from 'react';
import { Card, CardContent, Typography, Grid, Paper } from '@material-ui/core';
import CountUp from 'react-countup';

export default function Transactions() {
	return (
		<div className='m-2'>
			<Grid container justify='center'>
				<Grid item component={Card} xs={12} md={5} elevation={8}>
					<CardContent className='bg-success'>
						<Typography variant='h5' className='text-center' gutterBottom>
							You'll Get
							<hr />
						</Typography>

						<Typography variant='h3'>
							<CountUp start={0} end={1000} duration={2.5} separator=',' />
						</Typography>
					</CardContent>
				</Grid>
				&nbsp;&nbsp;&nbsp;
				<Grid item component={Card} xs={12} md={5} elevation={8}>
					<CardContent className='bg-danger'>
						<Typography variant='h5' className='text-center' gutterBottom>
							You'll Pay
							<hr />
						</Typography>

						<Typography variant='h3'>
							<CountUp start={0} end={1000} duration={2.5} separator=',' />
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
}
