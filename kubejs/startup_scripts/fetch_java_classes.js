// get java classes, put them in global, for use around the codebase.

global.java = {};

global.java.create = {}

if(Platform.isClientEnvironment()){
  global.java.create.CreateClient = Java.loadClass('com.simibubi.create.CreateClient')
  global.java.create.SpecialTextures = Java.loadClass('com.simibubi.create.AllSpecialTextures')
}