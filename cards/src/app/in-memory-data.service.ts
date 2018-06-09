import { InMemoryDbService } from 'angular-in-memory-web-api';
declare var require: any;

export class InMemoryDataService implements InMemoryDbService {
createDb()
{
  const locks =
    [
      {"id": 0, "name": "lottery-start", "lock": '0'},
      {"id": 1, "name": "lottery-done" , "lock": '0'}
    ];
  const price =
    [
      {"id": 0, "name": "Jaloviina *" , "url": "https://www.alko.fi/products/000706/Jaloviina-", "description": "Yhden tähden jallu" , "provider": "Antti"           , "dateOfLottery": "07.06.2018"},
      {"id": 1, "name": "Jaloviina **", "url": "https://www.alko.fi/products/000706/Jaloviina-", "description": "Kahden tähden jallu", "provider": "Antin peräkontti", "dateOfLottery": "07.06.2018"}
    ];
  const cards =
    [
      {"id":  0 , "value":  0 , "suit": "spades"   , "owner": "system" , "image": "/png/spades2.png"           , "bimage": "/png/back.png"  , "name": "spades"                       , "rnd": ""},
      {"id":  1 , "value":  0 , "suit": "hearts"   , "owner": "system" , "image": "/png/hearts2.png"           , "bimage": "/png/back.png"  , "name": "hearts"                       , "rnd": ""},
      {"id":  2 , "value":  0 , "suit": "clubs"    , "owner": "system" , "image": "/png/clubs2.png"            , "bimage": "/png/back.png"  , "name": "clubs"                        , "rnd": ""},
      {"id":  3 , "value":  0 , "suit": "diamonds" , "owner": "system" , "image": "/png/diamonds2.png"         , "bimage": "/png/back.png"  , "name": "diamonds"                     , "rnd": ""},
      {"id":  4 , "value": 14 , "suit": "spades"   , "owner": ""       , "image": "/png/ace_of_spades.png"     , "bimage": "/png/back.png"  , "name": "ace\u00A0of\u00A0spades"      , "rnd": ""},
      {"id":  5 , "value": 14 , "suit": "hearts"   , "owner": ""       , "image": "/png/ace_of_hearts.png"     , "bimage": "/png/back.png"  , "name": "ace\u00A0of\u00A0hearts"      , "rnd": ""},
      {"id":  6 , "value": 14 , "suit": "clubs"    , "owner": ""       , "image": "/png/ace_of_clubs.png"      , "bimage": "/png/back.png"  , "name": "ace\u00A0of\u00A0clubs"       , "rnd": ""},
      {"id":  7 , "value": 14 , "suit": "diamonds" , "owner": ""       , "image": "/png/ace_of_diamonds.png"   , "bimage": "/png/back.png"  , "name": "ace\u00A0of\u00A0diamonds"    , "rnd": ""},
      {"id":  8 , "value":  2 , "suit": "spades"   , "owner": ""       , "image": "/png/2_of_spades.png"       , "bimage": "/png/back.png"  , "name": "2\u00A0of\u00A0spades"        , "rnd": ""},
      {"id":  9 , "value":  2 , "suit": "hearts"   , "owner": ""       , "image": "/png/2_of_hearts.png"       , "bimage": "/png/back.png"  , "name": "2\u00A0of\u00A0hearts"        , "rnd": ""},
      {"id": 10 , "value":  2 , "suit": "clubs"    , "owner": ""       , "image": "/png/2_of_clubs.png"        , "bimage": "/png/back.png"  , "name": "2\u00A0of\u00A0clubs"         , "rnd": ""},
      {"id": 11 , "value":  2 , "suit": "diamonds" , "owner": ""       , "image": "/png/2_of_diamonds.png"     , "bimage": "/png/back.png"  , "name": "2\u00A0of\u00A0diamonds"      , "rnd": ""},
      {"id": 12 , "value":  3 , "suit": "spades"   , "owner": ""       , "image": "/png/3_of_spades.png"       , "bimage": "/png/back.png"  , "name": "3\u00A0of\u00A0spades"        , "rnd": ""},
      {"id": 13 , "value":  3 , "suit": "hearts"   , "owner": ""       , "image": "/png/3_of_hearts.png"       , "bimage": "/png/back.png"  , "name": "3\u00A0of\u00A0hearts"        , "rnd": ""},
      {"id": 14 , "value":  3 , "suit": "clubs"    , "owner": ""       , "image": "/png/3_of_clubs.png"        , "bimage": "/png/back.png"  , "name": "3\u00A0of\u00A0clubs"         , "rnd": ""},
      {"id": 15 , "value":  3 , "suit": "diamonds" , "owner": ""       , "image": "/png/3_of_diamonds.png"     , "bimage": "/png/back.png"  , "name": "3\u00A0of\u00A0diamonds"      , "rnd": ""},
      {"id": 16 , "value":  4 , "suit": "spades"   , "owner": ""       , "image": "/png/4_of_spades.png"       , "bimage": "/png/back.png"  , "name": "4\u00A0of\u00A0spades"        , "rnd": ""},
      {"id": 17 , "value":  4 , "suit": "hearts"   , "owner": ""       , "image": "/png/4_of_hearts.png"       , "bimage": "/png/back.png"  , "name": "4\u00A0of\u00A0hearts"        , "rnd": ""},
      {"id": 18 , "value":  4 , "suit": "clubs"    , "owner": ""       , "image": "/png/4_of_clubs.png"        , "bimage": "/png/back.png"  , "name": "4\u00A0of\u00A0clubs"         , "rnd": ""},
      {"id": 19 , "value":  4 , "suit": "diamonds" , "owner": ""       , "image": "/png/4_of_diamonds.png"     , "bimage": "/png/back.png"  , "name": "4\u00A0of\u00A0diamonds"      , "rnd": ""},
      {"id": 20 , "value":  5 , "suit": "spades"   , "owner": ""       , "image": "/png/5_of_spades.png"       , "bimage": "/png/back.png"  , "name": "5\u00A0of\u00A0spades"        , "rnd": ""},
      {"id": 21 , "value":  5 , "suit": "hearts"   , "owner": ""       , "image": "/png/5_of_hearts.png"       , "bimage": "/png/back.png"  , "name": "5\u00A0of\u00A0hearts"        , "rnd": ""},
      {"id": 22 , "value":  5 , "suit": "clubs"    , "owner": ""       , "image": "/png/5_of_clubs.png"        , "bimage": "/png/back.png"  , "name": "5\u00A0of\u00A0clubs"         , "rnd": ""},
      {"id": 23 , "value":  5 , "suit": "diamonds" , "owner": ""       , "image": "/png/5_of_diamonds.png"     , "bimage": "/png/back.png"  , "name": "5\u00A0of\u00A0diamonds"      , "rnd": ""},
      {"id": 24 , "value":  6 , "suit": "spades"   , "owner": ""       , "image": "/png/6_of_spades.png"       , "bimage": "/png/back.png"  , "name": "6\u00A0of\u00A0spades"        , "rnd": ""},
      {"id": 25 , "value":  6 , "suit": "hearts"   , "owner": ""       , "image": "/png/6_of_hearts.png"       , "bimage": "/png/back.png"  , "name": "6\u00A0of\u00A0hearts"        , "rnd": ""},
      {"id": 26 , "value":  6 , "suit": "clubs"    , "owner": ""       , "image": "/png/6_of_clubs.png"        , "bimage": "/png/back.png"  , "name": "6\u00A0of\u00A0clubs"         , "rnd": ""},
      {"id": 27 , "value":  6 , "suit": "diamonds" , "owner": ""       , "image": "/png/6_of_diamonds.png"     , "bimage": "/png/back.png"  , "name": "6\u00A0of\u00A0diamonds"      , "rnd": ""},
      {"id": 28 , "value":  7 , "suit": "spades"   , "owner": ""       , "image": "/png/7_of_spades.png"       , "bimage": "/png/back.png"  , "name": "7\u00A0of\u00A0spades"        , "rnd": ""},
      {"id": 29 , "value":  7 , "suit": "hearts"   , "owner": ""       , "image": "/png/7_of_hearts.png"       , "bimage": "/png/back.png"  , "name": "7\u00A0of\u00A0hearts"        , "rnd": ""},
      {"id": 30 , "value":  7 , "suit": "clubs"    , "owner": ""       , "image": "/png/7_of_clubs.png"        , "bimage": "/png/back.png"  , "name": "7\u00A0of\u00A0clubs"         , "rnd": ""},
      {"id": 31 , "value":  7 , "suit": "diamonds" , "owner": ""       , "image": "/png/7_of_diamonds.png"     , "bimage": "/png/back.png"  , "name": "7\u00A0of\u00A0diamonds"      , "rnd": ""},
      {"id": 32 , "value":  8 , "suit": "spades"   , "owner": ""       , "image": "/png/8_of_spades.png"       , "bimage": "/png/back.png"  , "name": "8\u00A0of\u00A0spades"        , "rnd": ""},
      {"id": 33 , "value":  8 , "suit": "hearts"   , "owner": ""       , "image": "/png/8_of_hearts.png"       , "bimage": "/png/back.png"  , "name": "8\u00A0of\u00A0hearts"        , "rnd": ""},
      {"id": 34 , "value":  8 , "suit": "clubs"    , "owner": ""       , "image": "/png/8_of_clubs.png"        , "bimage": "/png/back.png"  , "name": "8\u00A0of\u00A0clubs"         , "rnd": ""},
      {"id": 35 , "value":  8 , "suit": "diamonds" , "owner": ""       , "image": "/png/8_of_diamonds.png"     , "bimage": "/png/back.png"  , "name": "8\u00A0of\u00A0diamonds"      , "rnd": ""},
      {"id": 36 , "value":  9 , "suit": "spades"   , "owner": ""       , "image": "/png/9_of_spades.png"       , "bimage": "/png/back.png"  , "name": "9\u00A0of\u00A0spades"        , "rnd": ""},
      {"id": 37 , "value":  9 , "suit": "hearts"   , "owner": ""       , "image": "/png/9_of_hearts.png"       , "bimage": "/png/back.png"  , "name": "9\u00A0of\u00A0hearts"        , "rnd": ""},
      {"id": 38 , "value":  9 , "suit": "clubs"    , "owner": ""       , "image": "/png/9_of_clubs.png"        , "bimage": "/png/back.png"  , "name": "9\u00A0of\u00A0clubs"         , "rnd": ""},
      {"id": 39 , "value":  9 , "suit": "diamonds" , "owner": ""       , "image": "/png/9_of_diamonds.png"     , "bimage": "/png/back.png"  , "name": "9\u00A0of\u00A0diamonds"      , "rnd": ""},
      {"id": 40 , "value": 10 , "suit": "spades"   , "owner": ""       , "image": "/png/10_of_spades.png"      , "bimage": "/png/back.png"  , "name": "10\u00A0of\u00A0spades"       , "rnd": ""},
      {"id": 41 , "value": 10 , "suit": "hearts"   , "owner": ""       , "image": "/png/10_of_hearts.png"      , "bimage": "/png/back.png"  , "name": "10\u00A0of\u00A0hearts"       , "rnd": ""},
      {"id": 42 , "value": 10 , "suit": "clubs"    , "owner": ""       , "image": "/png/10_of_clubs.png"       , "bimage": "/png/back.png"  , "name": "10\u00A0of\u00A0clubs"        , "rnd": ""},
      {"id": 43 , "value": 10 , "suit": "diamonds" , "owner": ""       , "image": "/png/10_of_diamonds.png"    , "bimage": "/png/back.png"  , "name": "10\u00A0of\u00A0diamonds"     , "rnd": ""},
      {"id": 44 , "value": 11 , "suit": "spades"   , "owner": ""       , "image": "/png/jack_of_spades.png"    , "bimage": "/png/back.png"  , "name": "jack\u00A0of\u00A0spades"     , "rnd": ""},
      {"id": 45 , "value": 11 , "suit": "hearts"   , "owner": ""       , "image": "/png/jack_of_hearts.png"    , "bimage": "/png/back.png"  , "name": "jack\u00A0of\u00A0hearts"     , "rnd": ""},
      {"id": 46 , "value": 11 , "suit": "clubs"    , "owner": ""       , "image": "/png/jack_of_clubs.png"     , "bimage": "/png/back.png"  , "name": "jack\u00A0of\u00A0clubs"      , "rnd": ""},
      {"id": 47 , "value": 11 , "suit": "diamonds" , "owner": ""       , "image": "/png/jack_of_diamonds.png"  , "bimage": "/png/back.png"  , "name": "jack\u00A0of\u00A0diamonds"   , "rnd": ""},
      {"id": 48 , "value": 12 , "suit": "spades"   , "owner": ""       , "image": "/png/queen_of_spades.png"   , "bimage": "/png/back.png"  , "name": "queen\u00A0of\u00A0spades"    , "rnd": ""},
      {"id": 49 , "value": 12 , "suit": "hearts"   , "owner": ""       , "image": "/png/queen_of_hearts.png"   , "bimage": "/png/back.png"  , "name": "queen\u00A0of\u00A0hearts"    , "rnd": ""},
      {"id": 50 , "value": 12 , "suit": "clubs"    , "owner": ""       , "image": "/png/queen_of_clubs.png"    , "bimage": "/png/back.png"  , "name": "queen\u00A0of\u00A0clubs"     , "rnd": ""},
      {"id": 51 , "value": 12 , "suit": "diamonds" , "owner": ""       , "image": "/png/queen_of_diamonds.png" , "bimage": "/png/back.png"  , "name": "queen\u00A0of\u00A0diamonds"  , "rnd": ""},
      {"id": 52 , "value": 13 , "suit": "spades"   , "owner": ""       , "image": "/png/king_of_spades.png"    , "bimage": "/png/back.png"  , "name": "king\u00A0of\u00A0spades"     , "rnd": ""},
      {"id": 53 , "value": 13 , "suit": "hearts"   , "owner": ""       , "image": "/png/king_of_hearts.png"    , "bimage": "/png/back.png"  , "name": "king\u00A0of\u00A0hearts"     , "rnd": ""},
      {"id": 54 , "value": 13 , "suit": "clubs"    , "owner": ""       , "image": "/png/king_of_clubs.png"     , "bimage": "/png/back.png"  , "name": "king\u00A0of\u00A0clubs"      , "rnd": ""},
      {"id": 55 , "value": 13 , "suit": "diamonds" , "owner": ""       , "image": "/png/king_of_diamonds.png"  , "bimage": "/png/back.png"  , "name": "king\u00A0of\u00A0diamonds"   , "rnd": ""},
      {"id": 56 , "value": 98 , "suit": "other"    , "owner": ""       , "image": "/png/black_joker.png"       , "bimage": "/png/back.png"  , "name": "black\u00A0joker"             , "rnd": ""},
      {"id": 57 , "value": 99 , "suit": "other"    , "owner": ""       , "image": "/png/red_joker.png"         , "bimage": "/png/back.png"  , "name": "red\u00A0joker"               , "rnd": ""},
      {"id": 58 , "value":  0 , "suit": "other"    , "owner": "system" , "image": "/png/back.png"              , "bimage": "/png/back.png"  , "name": "\u00A0"                       , "rnd": ""},
      {"id": 59 , "value":  0 , "suit": "other"    , "owner": "system" , "image": "/png/back.png"              , "bimage": "/png/back.png"  , "name": "\u00A0"                       , "rnd": ""}
    ];
  return {locks, cards, price};
}
