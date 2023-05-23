// import * as React from 'react';
//
// import {Game} from "./Classes";
// import {Player} from "./Classes";
//
//
// // max_time- we need to define for every mission
//
// // @ts-ignore
// export default function points_calculator({mission_type, max_time, current_time, current_player, succeed = false}) {
//
//
//
//     if (mission_type === "group_mis") {
//         if (succeed) {
//             Game._players.forEach(value =>
//                 current_player._points += (max_time - current_time) * 10)
//         }
//
//
//     } else if (mission_type === "survival_mis") {
//         current_player._points += (max_time - current_time) * 10
//
//
//     } else if (mission_type === "punishment_mis") {
//
//         if (succeed) {
//             current_player._points += (max_time - current_time) * 10
//
//         } else {
//             current_player._points -= 50
//         }
//
//     } else if (mission_type === "secret_mis") {
//         current_player._points += 100
//
//     } else return (console.log("wrong mission name"))
// };
//
//
//
//
export {}