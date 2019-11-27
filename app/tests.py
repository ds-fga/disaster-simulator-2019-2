import sys
from app.simulation import steps, plot, restart


def evolution_100(name='T_ATM'):
    from matplotlib.pyplot import show

    restart()
    steps(10)
    plot(name)
    show()


# Só executa este código quando chamado como script
if __name__ == '__main__':
    # sys.argv == lista de parâmetros passados pela linha de comando.
    evolution_100(sys.argv[-1])
