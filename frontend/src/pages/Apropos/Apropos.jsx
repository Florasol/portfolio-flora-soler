// Import components
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'

// Import image
import aproposBanner from '../../assets/aproposbanner.jpeg'

// Import style
import './apropos.scss';

function APropos() {
    const aproposData = [
		{
			title: 'Fiabilité',
			content:
				"En tant que développeuse web, j'ai appris à produire un code structuré et maintenable, garantissant ainsi la fiabilité des projets sur lesquels je travaille. Mes expériences m'ont permis de comprendre l'importance de respecter les attentes des utilisateurs tout en fournissant des fonctionnalités qui répondent à leurs besoins. Mes méthodes incluent une communication régulière pour m'assurer que chaque fonctionnalité soit adéquate avant le déploiement de l'application.",
		},
		{
			title: 'Respect',
			content:
				"Je veille à respecter les délais ainsi que les exigences spécifiques des projets sur lesquels je collabore. Ce respect s'étend également à l'expérience utilisateur, en créant des interfaces accessibles et inclusives pour tous. Ainsi, mes projets intègrent une approche éthique et humaine du développement.",
		},
		{
			title: 'Service',
			content:
				"J'accorde une grande importance à l'idée de service, qu'il s'agisse d'aider un client à atteindre ses objectifs ou de fournir des solutions techniques robustes. Grâce à ma formation, j'ai développé des compétences pour répondre efficacement aux demandes spécifiques. Je suis également disponible pour résoudre les problèmes rapidement et m'assurer que mes projets apportent une réelle valeur ajoutée.",
		},
		{
			title: 'Sécurité',
			content:
				"La sécurité est une priorité dans chacun des projets sur lesquels je travaille. J'ai appris à implémenter des méthodes back-end pour sécuriser les données et protéger les utilisateurs contre les cyber-attaques. Je m'efforce de rester à jour sur les bonnes pratiques en matière de sécurité, comme l'implémentation d'authentification et la validation des entrées utilisateur.",
		},
	]
    return (
        <div>
            <Banner
            picture={aproposBanner}
            title=""
            className="banner"
            />
			{aproposData.map((item) => (
				<Collapse
					key={item.title}
					title={item.title}
					content={item.content}
					className="collapse-apropos"
				/>
				))}
        </div>
    )
}

export default APropos