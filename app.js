$(document).ready(function(){
	$('.ajouter').click(function(){
		$('#map',).toggle();



$('form').submit(function () {
	saisie()

	return false;
})
	$.ajax({
		url:"https://entreprise.data.gouv.fr/api/sirene/v1/full_text/kapar",
		dataType:"json",
		success:function(data){
			console.log(data)

			$('#siret').append(data.etablissement.siret); //j'ai récuperer min  id siret et je leur ajoutes les données de mon api que je veux récuperer//
			console.log(data.etablissement.siret);
		
	},
		error:function(xhr){
		console.log(xhr.status);
	}
})
	function saisie (){
		var info_entreprise=$('#info_entreprise').val(); // je récupere la valeur dans mon input info_entreprise ligne 18.html//

		$.ajax({
		url:"https://entreprise.data.gouv.fr/api/sirene/v1/full_text/kapar",
		dataType:"json",
		success:function(data){
		console.log(data);

			$('#siret').empty();			// j'ai créer une div vide en ligne 15.html et je lui dit d'ajouter mes données siret situe de l'objet établissement//
			$('#siret').append(data.etablissement.siret);
			
	},	
		error:function(xhr){
		console.log(xhr.status);
	}
	
	})

	}

  });

})



	
