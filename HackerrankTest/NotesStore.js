class NotesStore {
notes = {};

addNotes(state, name){
debugger;
if(this.notes[state]){
  this.notes[state].push(name);
} else {
  this.notes[state] = [name]
}
}

getNotes(state){
if(state == "active" || state == "completed" || state == "other"){
  return this.notes[state];
} 
throw `Invalid State ${state}`;
}
}

let store = new NotesStore();
store.addNotes("completed", "Jessie");
store.addNotes("completed", "Raymond");
store.addNotes("completed", "Steven");
store.addNotes("active", "Kenny");
//store.addNotes("active", "Raymond");
store.addNotes("other","Hillary");
store.getNotes("completed");