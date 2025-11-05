// Services/WeatherService.cs
using System.Net.Http;
using System.Text.Json;
public class WeatherService
{
    private readonly HttpClient _client;
    public WeatherService(HttpClient client) => _client = client;
    public async Task<string> GetCurrentAsync(string city) => await _client.GetStringAsync($"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=YOUR_KEY");
}