const map = {
  account: require('./modules/account/mutation-types'),/*
  auth: require('./modules/auth/mutation-types')*/
};
const finalActions = {};
for (let [module, actions] of Object.entries(map)) {
  finalActions[module] = {};
  for (let [key, value] of Object.entries(actions)) {
    finalActions[module][key] = `${module}/${value}`;
  }
}
export default finalActions;
