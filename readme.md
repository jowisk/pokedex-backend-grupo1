select('*')
          .from('pokemoves')
          .join(
            'moves', 
            ' pokemoves.moves_id', 
            'moves.id'
          )
