import React from 'react';
import { Grid, Flag, Icon, Input, Header, Image, Divider, Container, Label, Button } from 'semantic-ui-react'

function App() {
		return (
				<div className="App">
						<Grid container columns={5}>
								<Grid.Column width={1}>
										<Flag name="id"/>
								</Grid.Column>
								<Grid.Column width={1}>
										<Icon name="angle left"/>
								</Grid.Column>
								<Grid.Column width={1}>
										<Icon name="angle right"/>
								</Grid.Column>
								<Grid.Column width={7}>
										<Input fluid icon="star" placeholder="search"/>
								</Grid.Column>
								<Grid.Column width={2}></Grid.Column>
								<Grid.Column>
										<Header as="h3">
												<Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" avatar/>
												Patrick
										</Header>
								</Grid.Column>
						</Grid>

						<Divider horizontal>SELAMAT DATANG!!!</Divider>

						<Container textAlign="right">
								<Label 
										color="teal"
										pointing="left" 
										size="large"
								>
										<Icon name="point"/>Sport
								</Label>
						</Container>
						<br />
						<br />
						

						<Container textAlign="center">
								<p>Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)?

										Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez.

										Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan.
								</p>
						</Container>
						<br />
						
						<Container textAlign="center">
							<Button color='teal' content='Tambah Tautan Ke List' icon='add' labelPosition='left' />
						</Container>
				</div>
		);
}

export default App;
