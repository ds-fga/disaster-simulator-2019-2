class Game:
    """
    Representa o estado do jogo.
    """
    def __init__(self, name):
        self.points = 5
        self.name = name

    def reset(self):
        self.points = 5

    def to_json(self):
        return vars(self)