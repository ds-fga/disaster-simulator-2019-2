import random


def get_event():
    return random.choice(EVENT_LIST)


EVENT_LIST = [
    # Terminator
    {
        "id": "terminator",
        "img": '/img/events/terminator.jpg',
        "title": "Exterminador do futuro",
        "quote": "Hasta la vista, baby!",
        "question": None,
        "description": "Um guerreiro foi enviado do Futuro para salvar o planeta.",
        "options": [
            {
                "description": "Eliminar um Illuminati à sua escolha",
                "action": "Não se faz um omelete sem quebrar uns ovos",
                "successRate": 70,
                "success": None,
                "failure": [
                    "Illuminati aumenta seu poder em 5%",
                    "Você perde 10% de poder",
                ],
            },
            {
                "description": "Adotá-lo como segurança privado",
                "action": "Não se faz um omelete sem quebrar uns ovos",
                "successRate": 95,
                "success": ["Você aumenta em 5% o seu poder."],
                "failure": None,
            },
        ]
    }
]
