import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />

			<Jumbotron urlJumbutton="https://www.ted.com/talks/olivia_remes_how_to_cope_with_anxiety" />

			<div className="container">
				<div className="row">
					<div className="col-xl-3">
						<Card
							urlImg="https://i.picsum.photos/id/613/500/350.jpg?hmac=odFcrZXF63_XlBrcA-978WgaQLdvhA_X1PrvwvNjOrQ"
							className="card-img-top"
							alt="..."
							title="The Cure"
							textCard="Animula, vagula, blandula/Hospes comesque corporis/Quae nunc abibis in loca/ Pallidula, rigida, nudula,/Nec, ut soles, dabis iocos..."
							buttonCard="https://www.youtube.com/watch?v=hmbOLTWggXI&list=PLEkKaPmz9xJNkB9SPU0bAjs24jjgBRs2H&index=2"
							textButtonCard="Find out more about The Cure!"
						/>
					</div>
					<div className="col-xl-3">
						<Card
							urlImg="https://picsum.photos/500/350"
							title="Radio Futura"
							textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu gravida neque. Aenean scelerisque velit vitae nibh porttitor, nec eleifend risus placerat."
							buttonCard="https://www.youtube.com/watch?v=-AqALqQNPHY&list=PLEkKaPmz9xJNkB9SPU0bAjs24jjgBRs2H&index=20"
							textButtonCard="Find out more about Radio Futura!"
						/>
					</div>
					<div className="col-xl-3">
						<Card
							urlImg="https://i.picsum.photos/id/613/500/350.jpg?hmac=odFcrZXF63_XlBrcA-978WgaQLdvhA_X1PrvwvNjOrQ"
							title="The Cure"
							textCard="Animula, vagula, blandula/Hospes comesque corporis/Quae nunc abibis in loca/ Pallidula, rigida, nudula,/Nec, ut soles, dabis iocos..."
							buttonCard="https://www.youtube.com/watch?v=hmbOLTWggXI&list=PLEkKaPmz9xJNkB9SPU0bAjs24jjgBRs2H&index=2"
							textButtonCard="Find out more about The Cure!"
						/>
					</div>
					<div className="col-xl-3">
						<Card
							urlImg="https://picsum.photos/500/350"
							title="Radio Futura"
							textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu gravida neque. Aenean scelerisque velit vitae nibh porttitor, nec eleifend risus placerat."
							buttonCard="https://www.youtube.com/watch?v=-AqALqQNPHY&list=PLEkKaPmz9xJNkB9SPU0bAjs24jjgBRs2H&index=20"
							textButtonCard="Find out more about Radio Futura!"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
