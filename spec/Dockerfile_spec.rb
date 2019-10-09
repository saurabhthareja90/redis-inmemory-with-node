require "serverspec"
require "docker"

describe "Dockerfile" do
  before(:all) do
    @image = Docker::Image.build_from_dir('.')
    set :os, family: :alpine
    set :backend, :docker
    set :docker_image, @image.id
    set :docker_container_create_options, { 'Entrypoint' => ['ash'] }
  end

  it "should execute entrypoint" do
    expect(@image.json["Config"]["Entrypoint"][0]).to eq("docker-entrypoint.sh")
  end
  
  it "should pass the npm start cmd" do
    expect(@image.json["Config"]["Cmd"][0]).to eq("npm")
     expect(@image.json["Config"]["Cmd"][1]).to eq("start")
  end

end
