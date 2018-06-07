import { InMemoryDbService } from 'angular-in-memory-web-api';
declare var require: any;

export class InMemoryDataService implements InMemoryDbService {
  createDb() { 
    const cards = [
      {id:   1 , value:  0 , suit: 'spades'   , owner: 'system' , image: require('../../png/spades2.png')           , bimage: require('../../png/back.png')  , name: 'spades'                       },
      {id:   2 , value:  0 , suit: 'hearts'   , owner: 'system' , image: require('../../png/hearts2.png')           , bimage: require('../../png/back.png')  , name: 'hearts'                       },
      {id:   3 , value:  0 , suit: 'clubs'    , owner: 'system' , image: require('../../png/clubs2.png')            , bimage: require('../../png/back.png')  , name: 'clubs'                        },
      {id:   4 , value:  0 , suit: 'diamonds' , owner: 'system' , image: require('../../png/diamonds2.png')         , bimage: require('../../png/back.png')  , name: 'diamonds'                     },

      {id: 101 , value: 14 , suit: 'spades'   , owner: ''       , image: require('../../png/ace_of_spades.png')     , bimage: require('../../png/back.png')  , name: 'ace\u00A0of\u00A0spades'      },
      {id: 201 , value: 14 , suit: 'hearts'   , owner: ''       , image: require('../../png/ace_of_hearts.png')     , bimage: require('../../png/back.png')  , name: 'ace\u00A0of\u00A0hearts'      },
      {id: 301 , value: 14 , suit: 'clubs'    , owner: ''       , image: require('../../png/ace_of_clubs.png')      , bimage: require('../../png/back.png')  , name: 'ace\u00A0of\u00A0clubs'       },
      {id: 401 , value: 14 , suit: 'diamonds' , owner: ''       , image: require('../../png/ace_of_diamonds.png')   , bimage: require('../../png/back.png')  , name: 'ace\u00A0of\u00A0diamonds'    },

      {id: 102 , value:  2 , suit: 'spades'   , owner: ''       , image: require('../../png/2_of_spades.png')       , bimage: require('../../png/back.png')  , name: '2\u00A0of\u00A0spades'        },
      {id: 202 , value:  2 , suit: 'hearts'   , owner: ''       , image: require('../../png/2_of_hearts.png')       , bimage: require('../../png/back.png')  , name: '2\u00A0of\u00A0hearts'        },
      {id: 302 , value:  2 , suit: 'clubs'    , owner: ''       , image: require('../../png/2_of_clubs.png')        , bimage: require('../../png/back.png')  , name: '2\u00A0of\u00A0clubs'         },
      {id: 402 , value:  2 , suit: 'diamonds' , owner: ''       , image: require('../../png/2_of_diamonds.png')     , bimage: require('../../png/back.png')  , name: '2\u00A0of\u00A0diamonds'      },

      {id: 103 , value:  3 , suit: 'spades'   , owner: ''       , image: require('../../png/3_of_spades.png')       , bimage: require('../../png/back.png')  , name: '3\u00A0of\u00A0spades'        },
      {id: 203 , value:  3 , suit: 'hearts'   , owner: ''       , image: require('../../png/3_of_hearts.png')       , bimage: require('../../png/back.png')  , name: '3\u00A0of\u00A0hearts'        },
      {id: 303 , value:  3 , suit: 'clubs'    , owner: ''       , image: require('../../png/3_of_clubs.png')        , bimage: require('../../png/back.png')  , name: '3\u00A0of\u00A0clubs'         },
      {id: 403 , value:  3 , suit: 'diamonds' , owner: ''       , image: require('../../png/3_of_diamonds.png')     , bimage: require('../../png/back.png')  , name: '3\u00A0of\u00A0diamonds'      },

      {id: 104 , value:  4 , suit: 'spades'   , owner: ''       , image: require('../../png/4_of_spades.png')       , bimage: require('../../png/back.png')  , name: '4\u00A0of\u00A0spades'        },
      {id: 204 , value:  4 , suit: 'hearts'   , owner: ''       , image: require('../../png/4_of_hearts.png')       , bimage: require('../../png/back.png')  , name: '4\u00A0of\u00A0hearts'        },
      {id: 304 , value:  4 , suit: 'clubs'    , owner: ''       , image: require('../../png/4_of_clubs.png')        , bimage: require('../../png/back.png')  , name: '4\u00A0of\u00A0clubs'         },
      {id: 404 , value:  4 , suit: 'diamonds' , owner: ''       , image: require('../../png/4_of_diamonds.png')     , bimage: require('../../png/back.png')  , name: '4\u00A0of\u00A0diamonds'      },

      {id: 105 , value:  5 , suit: 'spades'   , owner: ''       , image: require('../../png/5_of_spades.png')       , bimage: require('../../png/back.png')  , name: '5\u00A0of\u00A0spades'        },
      {id: 205 , value:  5 , suit: 'hearts'   , owner: ''       , image: require('../../png/5_of_hearts.png')       , bimage: require('../../png/back.png')  , name: '5\u00A0of\u00A0hearts'        },
      {id: 305 , value:  5 , suit: 'clubs'    , owner: ''       , image: require('../../png/5_of_clubs.png')        , bimage: require('../../png/back.png')  , name: '5\u00A0of\u00A0clubs'         },
      {id: 405 , value:  5 , suit: 'diamonds' , owner: ''       , image: require('../../png/5_of_diamonds.png')     , bimage: require('../../png/back.png')  , name: '5\u00A0of\u00A0diamonds'      },

      {id: 106 , value:  6 , suit: 'spades'   , owner: ''       , image: require('../../png/6_of_spades.png')       , bimage: require('../../png/back.png')  , name: '6\u00A0of\u00A0spades'        },
      {id: 206 , value:  6 , suit: 'hearts'   , owner: ''       , image: require('../../png/6_of_hearts.png')       , bimage: require('../../png/back.png')  , name: '6\u00A0of\u00A0hearts'        },
      {id: 306 , value:  6 , suit: 'clubs'    , owner: ''       , image: require('../../png/6_of_clubs.png')        , bimage: require('../../png/back.png')  , name: '6\u00A0of\u00A0clubs'         },
      {id: 406 , value:  6 , suit: 'diamonds' , owner: ''       , image: require('../../png/6_of_diamonds.png')     , bimage: require('../../png/back.png')  , name: '6\u00A0of\u00A0diamonds'      },

      {id: 107 , value:  7 , suit: 'spades'   , owner: ''       , image: require('../../png/7_of_spades.png')       , bimage: require('../../png/back.png')  , name: '7\u00A0of\u00A0spades'        },
      {id: 207 , value:  7 , suit: 'hearts'   , owner: ''       , image: require('../../png/7_of_hearts.png')       , bimage: require('../../png/back.png')  , name: '7\u00A0of\u00A0hearts'        },
      {id: 307 , value:  7 , suit: 'clubs'    , owner: ''       , image: require('../../png/7_of_clubs.png')        , bimage: require('../../png/back.png')  , name: '7\u00A0of\u00A0clubs'         },
      {id: 407 , value:  7 , suit: 'diamonds' , owner: ''       , image: require('../../png/7_of_diamonds.png')     , bimage: require('../../png/back.png')  , name: '7\u00A0of\u00A0diamonds'      },

      {id: 108 , value:  8 , suit: 'spades'   , owner: ''       , image: require('../../png/8_of_spades.png')       , bimage: require('../../png/back.png')  , name: '8\u00A0of\u00A0spades'        },
      {id: 208 , value:  8 , suit: 'hearts'   , owner: ''       , image: require('../../png/8_of_hearts.png')       , bimage: require('../../png/back.png')  , name: '8\u00A0of\u00A0hearts'        },
      {id: 308 , value:  8 , suit: 'clubs'    , owner: ''       , image: require('../../png/8_of_clubs.png')        , bimage: require('../../png/back.png')  , name: '8\u00A0of\u00A0clubs'         },
      {id: 408 , value:  8 , suit: 'diamonds' , owner: ''       , image: require('../../png/8_of_diamonds.png')     , bimage: require('../../png/back.png')  , name: '8\u00A0of\u00A0diamonds'      },

      {id: 109 , value:  9 , suit: 'spades'   , owner: ''       , image: require('../../png/9_of_spades.png')       , bimage: require('../../png/back.png')  , name: '9\u00A0of\u00A0spades'        },
      {id: 209 , value:  9 , suit: 'hearts'   , owner: ''       , image: require('../../png/9_of_hearts.png')       , bimage: require('../../png/back.png')  , name: '9\u00A0of\u00A0hearts'        },
      {id: 309 , value:  9 , suit: 'clubs'    , owner: ''       , image: require('../../png/9_of_clubs.png')        , bimage: require('../../png/back.png')  , name: '9\u00A0of\u00A0clubs'         },
      {id: 409 , value:  9 , suit: 'diamonds' , owner: ''       , image: require('../../png/9_of_diamonds.png')     , bimage: require('../../png/back.png')  , name: '9\u00A0of\u00A0diamonds'      },

      {id: 110 , value: 10 , suit: 'spades'   , owner: ''       , image: require('../../png/10_of_spades.png')      , bimage: require('../../png/back.png')  , name: '10\u00A0of\u00A0spades'       },
      {id: 210 , value: 10 , suit: 'hearts'   , owner: ''       , image: require('../../png/10_of_hearts.png')      , bimage: require('../../png/back.png')  , name: '10\u00A0of\u00A0hearts'       },
      {id: 310 , value: 10 , suit: 'clubs'    , owner: ''       , image: require('../../png/10_of_clubs.png')       , bimage: require('../../png/back.png')  , name: '10\u00A0of\u00A0clubs'        },
      {id: 410 , value: 10 , suit: 'diamonds' , owner: ''       , image: require('../../png/10_of_diamonds.png')    , bimage: require('../../png/back.png')  , name: '10\u00A0of\u00A0diamonds'     },

      {id: 111 , value: 11 , suit: 'spades'   , owner: ''       , image: require('../../png/jack_of_spades.png')    , bimage: require('../../png/back.png')  , name: 'jack\u00A0of\u00A0spades'     },
      {id: 211 , value: 11 , suit: 'hearts'   , owner: ''       , image: require('../../png/jack_of_hearts.png')    , bimage: require('../../png/back.png')  , name: 'jack\u00A0of\u00A0hearts'     },
      {id: 311 , value: 11 , suit: 'clubs'    , owner: ''       , image: require('../../png/jack_of_clubs.png')     , bimage: require('../../png/back.png')  , name: 'jack\u00A0of\u00A0clubs'      },
      {id: 411 , value: 11 , suit: 'diamonds' , owner: ''       , image: require('../../png/jack_of_diamonds.png')  , bimage: require('../../png/back.png')  , name: 'jack\u00A0of\u00A0diamonds'   },

      {id: 112 , value: 12 , suit: 'spades'   , owner: ''       , image: require('../../png/queen_of_spades.png')   , bimage: require('../../png/back.png')  , name: 'queen\u00A0of\u00A0spades'    },
      {id: 212 , value: 12 , suit: 'hearts'   , owner: ''       , image: require('../../png/queen_of_hearts.png')   , bimage: require('../../png/back.png')  , name: 'queen\u00A0of\u00A0hearts'    },
      {id: 312 , value: 12 , suit: 'clubs'    , owner: ''       , image: require('../../png/queen_of_clubs.png')    , bimage: require('../../png/back.png')  , name: 'queen\u00A0of\u00A0clubs'     },
      {id: 412 , value: 12 , suit: 'diamonds' , owner: ''       , image: require('../../png/queen_of_diamonds.png') , bimage: require('../../png/back.png')  , name: 'queen\u00A0of\u00A0diamonds'  },

      {id: 113 , value: 13 , suit: 'spades'   , owner: ''       , image: require('../../png/king_of_spades.png')    , bimage: require('../../png/back.png')  , name: 'king\u00A0of\u00A0spades'     },
      {id: 213 , value: 13 , suit: 'hearts'   , owner: ''       , image: require('../../png/king_of_hearts.png')    , bimage: require('../../png/back.png')  , name: 'king\u00A0of\u00A0hearts'     },
      {id: 313 , value: 13 , suit: 'clubs'    , owner: ''       , image: require('../../png/king_of_clubs.png')     , bimage: require('../../png/back.png')  , name: 'king\u00A0of\u00A0clubs'      },
      {id: 413 , value: 13 , suit: 'diamonds' , owner: ''       , image: require('../../png/king_of_diamonds.png')  , bimage: require('../../png/back.png')  , name: 'king\u00A0of\u00A0diamonds'   },

      {id: 501 , value: 98 , suit: 'other'    , owner: ''       , image: require('../../png/black_joker.png')       , bimage: require('../../png/back.png')  , name: 'black\u00A0joker'             },
      {id: 502 , value: 99 , suit: 'other'    , owner: ''       , image: require('../../png/red_joker.png')         , bimage: require('../../png/back.png')  , name: 'red\u00A0joker'               },
      {id: 503 , value:  0 , suit: 'other'    , owner: 'system' , image: require('../../png/back.png')              , bimage: require('../../png/back.png')  , name: '\u00A0'                       },
      {id: 504 , value:  0 , suit: 'other'    , owner: 'system' , image: require('../../png/back.png')              , bimage: require('../../png/back.png')  , name: '\u00A0'                       }
    ];
    return {cards};
  }
}
