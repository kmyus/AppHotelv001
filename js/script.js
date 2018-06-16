var hotel = {
	principal: function() {
		document.addEventListener("deviceready", hotel.inicio, false);
	},
	inicio: function() {
		$("#btn-inicio-sesion").click(hotel.iniciarSesion);
	},
	iniciarSesion: function() {
		var email = $("#email-inicio").val();
		var password = $("#password-inicio").val();

		try {
			if(email == "") {
				throw new Error("El email no es válido.");
			}
			if(password == "") {
				throw new Error("El password no es válido.");
			}

			if(email == "lex" && password == "123") {
				window.location.href = "#main";
			} else {
				throw new Error("No existe tu cuenta, inténtalo de nuevo.");
			}
		} catch(error) {
			alert(error);
		}
	}
};

//Método para compilar
hotel.principal();

//Método para desarrollar
//hotel.inicio();