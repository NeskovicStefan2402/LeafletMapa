const state = {
  markeri: [],
  markers: [
    L.latLng(44.412, 20.218),
    L.latLng(44.512, 20.348),
    L.latLng(44.512, 20.418)
  ],
  coordinates: [
    L.latLng(44.412, 20.218),
    L.latLng(44.512, 20.348),
    L.latLng(44.512, 20.418)
  ],
  pocetna:[],
  povrsina: 0
};

const mutations = {
  'DODAJ_MARKER'(state, marker) {
    state.markers.push(marker);
    state.coordinates.push(marker);
  },
  'DODAJ_TRENUTNI_MARKER'(state, marker) {
    state.pocetna.push(marker);
  },
  'OBRISI_MARKER'(state, index) {
    state.markers.splice(index, 1);
    state.coordinates.splice(index, 1);
  }
};

const actions = {
  dodajMarker({ commit, state }, marker) {
    commit('DODAJ_MARKER', marker);
  },
  dodajTrenutniMarker({ commit, state }, marker) {
    commit('DODAJ_TRENUTNI_MARKER', marker);
  },
  obrisiMarker({ commit, state }, index) {
    commit('OBRISI_MARKER', index);
  }
};

export default {
  state,
  mutations,
  actions
}
