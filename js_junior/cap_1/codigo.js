dinerocofla = prompt("Cuanto dinero tienes, cofla? ");
dineroroberto = prompt("Cuanto dinero tienes, roberto? ");
dineropedro = prompt("Cuanto dinero tienes, pedro? ");

dinerocofla = parseInt(dinerocofla);

if (dinerocofla >= 0.6 && dinerocofla < 1) 
{
	alert("Cofla: Comprate el helado de agua ");
	alert("Y te sobran" + (dinerocofla - 0.6));

}else{
	if (dinerocofla >= 1 && dinerocofla < 1.6) {
		alert("Cofla: Comprate el helado de crema ");
		alert("Y te sobran" + dinerocofla - 1);

	}else{
		if (dinerocofla >= 1.6 && dinerocofla < 1.7) {
			alert("Cofla: Compra el helado de heladix ");
			alert("Y te sobran" + (dinerocofla - 1.6));

		}else{
			if (dinerocofla >= 1.7 && dinerocofla < 1.8) {
				alert("Cofla: Compra el helado de heladovich "); 
				alert("Y te sobran" + (dinerocofla - 1.7));

			}else{
				if (dinerocofla >= 1.8 && dinerocofla < 2.9) {
					alert("Cofla: Compra el helado de helardo");
					alert("Y te sobran" + (dinerocofla - 1.8));

				}
				if (dinerocofla >= 2.9) {
					alert("Cofla: Compra el helado con confites o el pote de 1/4 kg");
					alert("Y te sobran" + (dinerocofla - 2.9));

				}else{
					alert("Cofla: No te alcanza para ningun helado ");
				}
			}
		}
	}	
}

if (dineroroberto >= 0.6 && dineroroberto < 1) 
{
	alert("Cofla: Comprate el helado de agua ");

}else{
	if (dineroroberto >= 1 && dineroroberto < 1.6) {
		alert("Cofla: Comprate el helado de crema ");

	}else{
		if (dineroroberto >= 1.6 && dineroroberto < 1.7) {
			alert("Cofla: Compra el helado de heladix ");

		}else{
			if (dineroroberto >= 1.7 && dineroroberto < 1.8) {
				alert("Cofla: Compra el helado de heladovich "); 

			}else{
				if (dineroroberto >= 1.8 && dineroroberto < 2.9) {
					alert("Cofla: Compra el helado de helardo");

				}
				if (dineroroberto >= 2.9) {
					alert("Cofla: Compra el helado con confites o el pote de 1/4 kg");

				}else{
					alert("Cofla: No te alcanza para ningun helado ");
				}
			}
		}
	}	
}

if (dineropedro >= 0.6 && dineropedro < 1) 
{
	alert("Cofla: Comprate el helado de agua ");

}else{
	if (dineropedro >= 1 && dineropedro < 1.6) {
		alert("Cofla: Comprate el helado de crema ");

	}else{
		if (dineropedro >= 1.6 && dineropedro < 1.7) {
			alert("Cofla: Compra el helado de heladix ");

		}else{
			if (dineropedro >= 1.7 && dineropedro < 1.8) {
				alert("Cofla: Compra el helado de heladovich "); 

			}else{
				if (dineropedro >= 1.8 && dineropedro < 2.9) {
					alert("Cofla: Compra el helado de helardo");

				}
				if (dineropedro >= 2.9) {
					alert("Cofla: Compra el helado con confites o el pote de 1/4 kg");

				}else{
					alert("Cofla: No te alcanza para ningun helado ");
				}
			}
		}
	}	
}